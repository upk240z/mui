import React from 'react'

import {
  Paper
} from '@mui/material'

import Base from '../layouts/base'
import MenuItems from '../components/menu-items'

export default function Home() {
  return  (
    <Base title="Home">
      <Paper>
        <MenuItems/>
      </Paper>
    </Base>
  )
}
