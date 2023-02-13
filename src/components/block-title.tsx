import React from 'react'

import {Typography} from '@mui/material'

export default function BlockTitle({title}: any) {
  return (
    <Typography variant="h6" color="secondary" sx={{ mb: 2 }}>{ title }</Typography>
  )
}
