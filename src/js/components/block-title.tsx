import React from 'react'

import {green} from '@mui/material/colors'
import {Typography} from '@mui/material'

export default function BlockTitle({title}: any) {
  return (
    <Typography variant="h6" sx={{ mb: 2, color: green[800] }}>{ title }</Typography>
  )
}
