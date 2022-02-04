import React from 'react'

import {
  Paper
} from '@mui/material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'
import StateGrid from '../components/state-grid'

const getRow = (id: number): object => {
  return {
    id: id,
    state: '支店承認待ち',
    'shop-state': '×',
    'shop-name': '○○○○○○店' + id,
    'last-updated': '2021-04-04 16:50',
    'business-time': '営業休止中',
    'limit': 'H:50リットルまで',
    'note': '破損個所があります',
    'damage': ['建物', '設備'],
    'stock': '',
    'detail': '',
  }
}

export default function Grid() {
  const rows = []

  for (let i=1; i<=100; i++) {
    rows.push(getRow(i))
  }

  return (
    <Base title="Grid">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Table"/>
        <StateGrid rows={rows}/>
      </Paper>
    </Base>
  )
}
