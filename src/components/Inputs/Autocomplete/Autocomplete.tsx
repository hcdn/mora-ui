import React, { FC } from 'react'
import Downshift from 'downshift'
import { TextField } from '..'
import { Box, CircleButton } from '../..'
import styled, { css } from 'styled-components'
import { AutocompleteProps, SelectMenuItemProps } from './AutocompleteTypes'
import { AutocompleteOption } from '.'
import { cssGetSize } from '../../..'
import { CompositeField } from '../CompositeField'

export const SelectMenu = styled(Box).attrs({ as: 'ul' })`
  padding: 0;
  top: 100%;
  margin-top: ${cssGetSize(4)};
  position: absolute;
  background-color: ${({ theme }) => theme.palette.background.primary.main};
  border: solid 1px ${({ theme }) => theme.palette.divider};
  border-radius: ${cssGetSize(2)};
  box-shadow: ${({ theme }) => theme.elevations.z[4]};
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 9999;
`

export const SelectMenuItem = styled(Box).attrs({
  as: 'li'
})<SelectMenuItemProps>`
  ${({ highlighted }) =>
    highlighted &&
    css`
      background-color: ${({ theme }) =>
        theme.palette.background.secondary.main};
    `}
  padding: ${cssGetSize(2)};
  cursor: pointer;
`

const SelectionContainerCss = css`
  position: relative;
  overflow: visible !important;
`

const itemToString = (option: AutocompleteOption | null): string =>
  option ? option.label : ''

export const Autocomplete: FC<AutocompleteProps> = ({
  options,
  onSelect,
  initialHighlightedIndex,
  initialInputValue,
  initialIsOpen,
  initialSelectedItem,
  /** TextField props */
  preInputText,
  postInputText,
  defaultValue,
  format,
  value: inputValue,
  inputProps,
  label,
  name,
  required,
  ...boxProps
}) => {
  return (
    <Downshift
      itemToString={itemToString}
      onSelect={onSelect}
      initialHighlightedIndex={initialHighlightedIndex}
      initialInputValue={initialInputValue}
      initialIsOpen={initialIsOpen}
      initialSelectedItem={initialSelectedItem}
      inputValue={typeof inputValue === 'number' ? '' + inputValue : inputValue}
    >
      {({
        inputValue,
        getInputProps,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
        selectedItem,
        highlightedIndex,
        isOpen,
        clearSelection,
        getRootProps,
        openMenu
      }) => (
        <CompositeField css={SelectionContainerCss} {...boxProps}>
          <Box
            flex
            noWrap
            align='center'
            sx={{ width: '100%' }}
            {...getRootProps(undefined, { suppressRefError: true })}
          >
            <TextField
              value={inputValue}
              preInputText={preInputText}
              postInputText={postInputText}
              defaultValue={defaultValue}
              format={format}
              label={label}
              name={name}
              required={required}
              inputProps={{
                ...getInputProps(),
                ...inputProps,
                onFocus: () => openMenu()
              }}
            />
            {selectedItem ? (
              <CircleButton
                color='error'
                sx={{
                  fontSize: '1.5rem !important'
                }}
                onClick={clearSelection}
                aria-label='clear selection'
              >
                ×
              </CircleButton>
            ) : (
              <CircleButton {...getToggleButtonProps()}>
                <Box
                  sx={{
                    transform: isOpen ? 'rotate(180deg)' : '',
                    transition: 'transform .2s ease'
                  }}
                >
                  ▼
                </Box>
              </CircleButton>
            )}
            {isOpen && (
              <SelectMenu {...getMenuProps({ open: isOpen })}>
                {(() => {
                  const filteredOptions = options.filter(
                    ({ label }) =>
                      inputValue === null ||
                      `${label}`
                        .toLowerCase()
                        .includes(`${inputValue}`.toLowerCase())
                  )

                  if (filteredOptions.length === 0) {
                    if (!inputValue) {
                      return <SelectMenuItem disabled>Buscar</SelectMenuItem>
                    }
                    return (
                      <SelectMenuItem disabled>Sin resultados</SelectMenuItem>
                    )
                  }
                  return filteredOptions.map((item, index) => (
                    <SelectMenuItem
                      highlighted={highlightedIndex === index}
                      key={item.value}
                      {...getItemProps({
                        item,
                        index
                      })}
                    >
                      {item.label}
                    </SelectMenuItem>
                  ))
                })()}
              </SelectMenu>
            )}
          </Box>
        </CompositeField>
      )}
    </Downshift>
  )
}
