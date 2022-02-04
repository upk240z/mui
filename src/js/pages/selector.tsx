import React from 'react'

import {
  Paper, Grid, Typography,
  FormControl, InputLabel, MenuItem, Select, FormControlLabel, Checkbox,
} from '@mui/material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'
import MultiSelector, {MultiSelectorItem} from '../components/multi-selector'
import {Areas, Prefectures, OpenStates} from '../lib/constants'

const items: MultiSelectorItem[] = []
Object.keys(Areas).forEach(areaCode => {
  const area = Areas[areaCode]
  items.push({
    code: 'area-' + areaCode,
    label: '=== ' + area.name + ' ===',
    isGroup: true
  })

  area.prefectures.forEach(prefCode => {
    items.push({
      code: prefCode.toString(),
      label: Prefectures[prefCode],
      isGroup: false
    })
  })
})

const openStates = Object.keys(OpenStates).map((code, index) => {
  const flag = !['normal', 'none'].includes(code)
  return (
    <Grid item key={index} xs={12} md={4}>
      <FormControlLabel control={<Checkbox disabled={flag} defaultChecked={flag}/>} label={OpenStates[code]}/>
    </Grid>
  )
})

export default function Selector() {
  return (
    <Base title="Selector">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="PullDown"/>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <FormControl fullWidth>
              <InputLabel>Normal</InputLabel>
              <Select label="Normal">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <MultiSelector label="Customized Multiple" items={items}/>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Checkbox"/>
        <Grid container>
          { openStates }
        </Grid>
      </Paper>
    </Base>
  )
}
