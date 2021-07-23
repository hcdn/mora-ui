export const cssGetProp = (
  propName: string,
  propValue: any,
  defaultValue?: any
) =>
  (propValue || defaultValue) !== undefined
    ? `${propName}: ${propValue || defaultValue};`
    : ''
