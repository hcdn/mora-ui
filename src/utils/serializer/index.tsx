// based on defunctzombie/form-serialize
// LICENSE: https://github.com/defunctzombie/form-serialize/blob/master/LICENSE
// https://github.com/defunctzombie/form-serialize/commit/8f39989f742c23dcf51987c173bea3fe31eaf110#diff-c693279643b8cd5d248172d9c22cb7cf4ed163a3c98c8a3f69c2717edd3eacb7

// get successful control from form and assemble into object
// http://www.w3.org/TR/html401/interact/forms.html#h-17.13.2

// types which indicate a submit action and are not successful controls
// these will be ignored
var kRSubmitter = /^(?:submit|button|image|reset|file)$/i

// node names which could be successful controls
var kRSuccessControll = /^(?:input|select|textarea|keygen)/i

// Matches bracket notation.
var brackets = /(\[[^[\]]*\])/g

interface Options<Result> {
  /** Configure the output type. If true, the output will be a js object. */
  hash?: boolean | undefined
  /**
   * Optional serializer function to override the default one. The function takes 3 arguments (result, key,
   * value) and should return new result hash and url encoded str serializers are provided with this module
   */
  serializer?:
    | ((result: Result, key: string, value: string) => Result)
    | undefined
  /** If true serialize disabled fields. */
  disabled?: boolean | undefined
  /** If true serialize empty fields */
  empty?: boolean | undefined
}

interface ResultHash {
  [key: string]: string | string[] | ResultHash
}

interface OptionsHash extends Options<ResultHash> {
  hash: boolean
}

// serializes form fields
// @param form MUST be an HTMLForm element
// @param options is an optional argument to configure the serialization. Default output
// with no options specified is a url encoded string
//    - hash: [true | false] Configure the output type. If true, the output will
//    be a js object.
//    - serializer: [function] Optional serializer function to override the default one.
//    The function takes 3 arguments (result, key, value) and should return new result
//    hash and url encoded str serializers are provided with this module
//    - disabled: [true | false]. If true serialize disabled fields.
//    - empty: [true | false]. If true serialize empty fields
function serialize(form: HTMLFormElement, options: OptionsHash) {
  var result = options.hash ? {} : ''
  const serializer = hashSerializer

  const elements: any = form && form.elements ? form.elements : []

  // Object store each radio and set if it's empty or not
  var radioStore = Object.create(null)

  for (var i = 0; i < elements.length; ++i) {
    var element = elements[i]

    // ingore disabled fields
    if ((!options.disabled && element.disabled) || !element.name) {
      continue
    }
    // ignore anyhting that is not considered a success field
    if (
      !kRSuccessControll.test(element.nodeName) ||
      kRSubmitter.test(element.type)
    ) {
      continue
    }

    var key = element.name
    var val = element.value

    // we can't just use element.value for checkboxes cause some browsers lie to us
    // they say "on" for value when the box isn't checked
    if (
      (element.type === 'checkbox' || element.type === 'radio') &&
      !element.checked
    ) {
      val = undefined
    }

    // If we want empty elements
    if (options.empty) {
      // for checkbox
      if (element.type === 'checkbox' && !element.checked) {
        val = ''
      }

      // for radio
      if (element.type === 'radio') {
        if (!radioStore[element.name] && !element.checked) {
          radioStore[element.name] = false
        } else if (element.checked) {
          radioStore[element.name] = true
        }
      }

      // if options empty is true, continue only if its radio
      if (val === undefined && element.type === 'radio') {
        continue
      }
    } else {
      // value-less fields are ignored unless options.empty is true
      if (!val) {
        continue
      }
    }

    // multi select boxes
    if (element.type === 'select-multiple') {
      val = []

      var selectOptions = element.options
      var isSelectedOptions = false
      for (var j = 0; j < selectOptions.length; ++j) {
        var option = selectOptions[j]
        var allowedEmpty = options.empty && !option.value
        var hasValue = option.value || allowedEmpty
        if (option.selected && hasValue) {
          isSelectedOptions = true

          // If using a hash serializer be sure to add the
          // correct notation for an array in the multi-select
          // context. Here the name attribute on the select element
          // might be missing the trailing bracket pair. Both names
          // "foo" and "foo[]" should be arrays.
          if (key.slice(key.length - 2) !== '[]') {
            result = serializer(result, key + '[]', option.value, element)
          } else {
            result = serializer(result, key, option.value, element)
          }
        }
      }

      // Serialize if no selected options and options.empty is true
      if (!isSelectedOptions && options.empty) {
        result = serializer(result, key, '', element)
      }

      continue
    }

    result = serializer(result, key, val, element)
  }

  // Check for all empty radio buttons and serialize them with key=""
  if (options.empty) {
    for (const key in radioStore) {
      if (!radioStore[key]) {
        result = serializer(result, key, '')
      }
    }
  }

  return result
}

function parseKeys(string: string) {
  var keys = []
  var prefix = /^([^[\]]*)/
  var children = new RegExp(brackets)
  var match = prefix.exec(string)

  if (match && match[1]) {
    keys.push(match[1])
  }

  while ((match = children.exec(string)) !== null) {
    keys.push(match[1])
  }

  return keys
}

function hashAssign(
  result: any,
  keys: any,
  value: string,
  element?: HTMLInputElement
) {
  if (keys.length === 0) {
    result = value
    return result
  }

  var key = keys.shift()
  var between = key.match(/^\[(.+?)\]$/)

  if (key === '[]') {
    result = result || []

    if (Array.isArray(result)) {
      // special case for checkboxes
      if (!(value === '' && element?.type === 'checkbox')) {
        result.push(hashAssign(null, keys, value, element))
      }
    } else {
      // This might be the result of bad name attributes like "[][foo]",
      // in this case the original `result` object will already be
      // assigned to an object literal. Rather than coerce the object to
      // an array, or cause an exception the attribute "_values" is
      // assigned as an array.
      result._values = result._values || []
      result._values.push(hashAssign(null, keys, value, element))
    }

    return result
  }

  // Key is an attribute name and can be assigned directly.
  if (!between) {
    result[key] = hashAssign(result[key], keys, value, element)
  } else {
    var string = between[1]
    // +var converts the variable into a number
    // better than parseInt because it doesn't truncate away trailing
    // letters and actually fails if whole thing is not a number
    var index = +string

    // If the characters between the brackets is not a number it is an
    // attribute name and can be assigned directly.
    if (isNaN(index)) {
      result = result || {}
      result[string] = hashAssign(result[string], keys, value, element)
    } else {
      result = result || []
      result[index] = hashAssign(result[index], keys, value, element)
    }
  }

  return result
}

// Object/hash encoding serializer.
function hashSerializer(
  result: ResultHash,
  key: string,
  value: string,
  element?: HTMLInputElement
) {
  const matches = key.match(brackets)

  // Has brackets? Use the recursive assignment function to walk the keys,
  // construct any missing objects in the result tree and make the assignment
  // at the end of the chain.
  if (matches) {
    var keys = parseKeys(key)
    hashAssign(result, keys, value, element)
  } else {
    // Non bracket notation can make assignments directly.
    const existing = result[key]

    // If the value has been assigned already (for instance when a radio and
    // a checkbox have the same name attribute) convert the previous value
    // into an array before pushing into it.
    //
    // NOTE: If this requirement were removed all hash creation and
    // assignment could go through `hashAssign`.
    if (existing) {
      if (!Array.isArray(existing) && typeof existing === 'string') {
        result[key] = [existing]
      }
      if (Array.isArray(existing)) {
        existing.push(value)
        result[key] = existing
      }
      Array.isArray(result[key])
    } else {
      result[key] = value
    }
  }

  return result
}

export { serialize }
