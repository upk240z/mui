import React from 'react'

import {
  Paper, Grid,
  TextField
} from '@mui/material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'

export default function TextForm() {
  return (
    <Base title="Text Form">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Text field"/>
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <TextField label="Outlined" variant="outlined" fullWidth/>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label="Filled" variant="filled" fullWidth/>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label="Error" variant="outlined" fullWidth error helperText="This is required"/>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField label="Muitiple lines" variant="outlined" fullWidth multiline minRows={5}/>
          </Grid>
        </Grid>
      </Paper>
    </Base>
  )
}
