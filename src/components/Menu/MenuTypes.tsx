export interface MenuItemProps extends BoxProps {
  label: string,
  icon?: any,
  selected?: boolean,
}

export interface MenuProps extends BoxProps {
  maxWidth: number,
}
