import React from 'react'

import {
  Paper, Grid, Typography, Box, Chip, IconButton
} from '@mui/material'
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material'
import {blue,red} from '@mui/material/colors'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'

const miniBox = (
  <Grid item xs={12} md={4}>
    <Paper sx={{p: 2}}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        <Chip label="カテゴリ" variant="outlined" color="success"/>
        <Box sx={{flexGrow: 1, textAlign: 'right'}}>
          <IconButton size="small" sx={{color: 'white', backgroundColor: blue[500], mr: 1}}>
            <EditIcon/>
          </IconButton>
          <IconButton size="small" sx={{color: 'white', backgroundColor: red[500]}}>
            <DeleteIcon/>
          </IconButton>
        </Box>
      </Box>
      <Typography sx={{mt: 2}}>だるささんがころんだ。だるささんがころんだ。だるささんがころんだ。</Typography>
    </Paper>
  </Grid>
)

const miniBoxes: any = []
for (let i=0; i<6; i++) {
  miniBoxes.push(miniBox)
}

export default function Card() {
  return (
    <Base title="Card">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Mini box" />
        <Grid container spacing={1}>
          { miniBoxes }
        </Grid>
      </Paper>
    </Base>
  )
}
