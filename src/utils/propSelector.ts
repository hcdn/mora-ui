export const propSelector = (
  obj: object,
  selector?: any,
  defaultSelector?: any,
  /** Allow returning the incoming value if not found in obj */
  isStrict: boolean = false
) => {
  if (typeof selector === undefined) {
    if (typeof defaultSelector === undefined) {
      throw new Error('default not setted.')
    } else {
      return obj[defaultSelector]
    }
  } else {
    // selector is defined
    if (selector in obj) {
      return obj[selector]
    } else if (isStrict) {
      throw new Error('Invalid value')
    }
    return selector
  }
}
