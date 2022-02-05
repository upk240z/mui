import React, {useState} from 'react'

import {
  Paper, Grid, Typography, TextField,
  FormControl, InputLabel, MenuItem, Select, FormControlLabel,
  Checkbox, Box, IconButton,
  Modal,
} from '@mui/material'
import {
  Add as AddIcon,
  Close as CloseIcon,
  Check as CheckIcon,
} from '@mui/icons-material'
import {blue, red, green} from '@mui/material/colors'

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

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
}

export default function Selector() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleToggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <Base title="Selector">
      <Paper sx={{ p: 2 }} elevation={3}>
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
          <Grid item md={4} xs={12}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <Box sx={{flexGrow: 1, pr: 2}}>
                <FormControl fullWidth>
                  <InputLabel>With Button</InputLabel>
                  <Select label="With Button">
                    <MenuItem value="java">Java</MenuItem>
                    <MenuItem value="javascript">JavaScript</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{pt: 1}}>
                <IconButton sx={{ color: 'white', backgroundColor: blue[500] }} onClick={handleToggleModal}>
                  <AddIcon/>
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ mt: 2, p: 2 }} elevation={3}>
        <BlockTitle title="Checkbox"/>
        <Grid container>
          { openStates }
        </Grid>
      </Paper>

      <Modal
        open={modalOpen}
        onClose={handleToggleModal}
      >
        <Box sx={modalStyle}>
          <Typography component="h4" sx={{mb: 1, fontWeight: 'bold'}}>Add</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <Box sx={{flexGrow: 1}}>
              <TextField label="Add item" variant="outlined" fullWidth/>
            </Box>
            <Box sx={{pt: 1, pl: 2}}>
              <IconButton
                size="small"
                sx={{color: 'white', backgroundColor: green[500], mr: 1}}
                onClick={handleToggleModal}
              >
                <CheckIcon/>
              </IconButton>
              <IconButton
                size="small"
                sx={{color: 'white', backgroundColor: red[500]}}
                onClick={handleToggleModal}
              >
                <CloseIcon/>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Modal>

    </Base>
  )
}
