import React from 'react'

import {
  Paper, Grid,
  Alert
} from '@mui/material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'

export default function Message() {
  return (
    <Base title="Message">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Alert"/>
        <Grid container spacing={1}>
          <Grid item md={4} xs={12}>
            <Alert severity="success">Success!</Alert>
          </Grid>
          <Grid item md={4} xs={12}>
            <Alert severity="error">Error!</Alert>
          </Grid>
          <Grid item md={4} xs={12}>
            <Alert severity="info">Info</Alert>
          </Grid>
          <Grid item md={4} xs={12}>
            <Alert severity="warning">Warning</Alert>
          </Grid>
        </Grid>
      </Paper>
    </Base>
  )
}
