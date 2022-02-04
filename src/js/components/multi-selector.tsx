import React from 'react'

import {styled} from '@mui/material/styles'
import {
  Select,
  FormControl,
  InputLabel,
  OutlinedInput,
  SelectChangeEvent,
  Box,
  Chip,
  MenuItem
} from '@mui/material'
import {blue} from '@mui/material/colors'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

export type MultiSelectorItem = {
  code: string,
  label: string,
  isGroup: boolean
}

type MultiSelectorParams = {
  label: string,
  items: MultiSelectorItem[]
}

const GroupMenuItem = styled(MenuItem)({
  opacity: 1.0,
  color: 'rgba(0, 0, 0, 1)',
  fontWeight: 'bold',
  textAlign: 'center'
})

export default function MultiSelector({label, items}: MultiSelectorParams) {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectedItems>) => {
    const {
      target: { value },
    } = event
    setSelectedItems(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  const existGroup = items.filter((item) => item.isGroup).length > 0

  const lookup = (code: string): MultiSelectorItem => {
    for (const item of items) {
      if (code == item.code) { return item }
    }
    return items[0]
  }

  const menuItems = items.map((item, index) => {
    return (
      item.isGroup ?
        <GroupMenuItem key={index} value={item.code} disabled>
          { item.label }
        </GroupMenuItem> :
        <MenuItem key={index} value={item.code} sx={{paddingLeft: existGroup ? '30px' : '0'}}>
          { item.label }
        </MenuItem>
    )
  })

  return (
    <FormControl fullWidth>
      <InputLabel>{ label }</InputLabel>
      <Select
        multiple
        label={ label }
        value={selectedItems}
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {
              selected.map((value) => {
                const item = lookup(value)
                return <Chip
                  key={item.code}
                  label={item.label}
                  sx={{
                    backgroundColor: blue[800],
                    color: 'white'
                  }}
                />
              })
            }
          </Box>
        )}
        MenuProps={MenuProps}
      >
        { menuItems }
      </Select>
    </FormControl>
  )
}
