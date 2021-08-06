export const cssGetProp = (
  propName: string,
  propValue: any,
  defaultValue?: any
) =>
  evalDefinedProp(propValue || defaultValue)
    ? `${propName}: ${propValue || defaultValue};`
    : ''

const evalDefinedProp = (prop: any): boolean => {
  switch (prop) {
    case undefined:
      return false
    case false:
      return false
    case null:
      return false
    default:
      return true
  }
}
