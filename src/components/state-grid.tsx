import * as React from 'react'
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid'
import {Chip} from '@mui/material'
import {red} from '@mui/material/colors'

const columns: GridColDef[] = [
  { field: 'state', headerName: '状態', width: 150 },
  {
    field: 'shop-state',
    headerName: "営業状況",
    align: 'center',
    renderCell: ((p: GridRenderCellParams) => {
      return (
        <Chip label={p.value} sx={{backgroundColor: red[500], color: 'white'}}/>
      )
    })
  },
  { field: 'shop-name', headerName: '店舗名', width: 300 },
  { field: 'last-updated', headerName: '最終更新日時', width: 150 },
  { field: 'business-time', headerName: '営業時間', width: 120 },
  { field: 'limit', headerName: '制限事項', width: 200 },
  { field: 'note', headerName: '備考(お客様向け)', width: 300 },
  {
    field: 'damage', headerName: '損害箇所', width: 200,
    renderCell: ((p: GridRenderCellParams) => {
      const chips = Array.from(p.value).map((text: any, index) => {
        return (
          <Chip key={index} label={text.toString()} sx={{backgroundColor: red[500], color: 'white'}}/>
        )
      })

      return (
        <>{ chips }</>
      )
    })
  },
  { field: 'stock', headerName: '在庫状況', width: 200 },
  { field: 'detail', headerName: '詳細報告', width: 200 },
]

export default function StateGrid({rows}: any) {
  return (
    <DataGrid
      autoHeight
      pageSize={25}
      columns={columns}
      rows={rows}
    />
  )
}
