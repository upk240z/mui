import React from 'react'

import {
  Paper, Grid, Button,
} from '@mui/material'
import {
  Edit as EditIcon,
} from '@mui/icons-material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'

export default function Buttons() {
  return (
    <Base title="Button">
      <Paper sx={{ p: 2 }} elevation={3}>
        <BlockTitle title="Single"/>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Button variant="contained" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              Primary
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="outlined" color="secondary" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              secondary
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="text" color="success" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              success
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="contained" color="error" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              error
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="contained" color="info" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              info
            </Button>
          </Grid>
          <Grid item md={4} xs={12}>
            <Button variant="contained" color="warning" fullWidth>
              <EditIcon sx={{ mr: 1 }}/>
              warning
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Base>
  )
}
