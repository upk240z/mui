import React from 'react'

import {
  Paper, Box,
} from '@mui/material'

import Base from '../layouts/base'
import BlockTitle from '../components/block-title'

const MyBox = ({children, sx}: any) => {
  return (
    <Box sx={{ p: 2, border: 1, borderRadius: 1, borderColor: 'green', color: 'blue', ...sx }}>
      { children }
    </Box>
  )
}

const Spacer = () => {
  return (
    <Box sx={{ width: 10, height: 10 }}/>
  )
}

export default function BoxLayout() {
  return (
    <Base title="Box Layout">
      <Paper sx={{ p: 2 }}>
        <BlockTitle title="Center horizontal"/>
        <MyBox sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <MyBox sx={{ width: 'auto' }}>
            Box1
          </MyBox>
        </MyBox>

        <BlockTitle title="Center vertical"/>
        <MyBox sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <MyBox sx={{ width: 'auto', height: 60 }}>
              Box1
            </MyBox>
          </Box>
          <Spacer/>
          <MyBox sx={{ width: 'auto', height: 120 }}>
            Box2
          </MyBox>
        </MyBox>

        <BlockTitle title="Direction = row"/>
        <MyBox sx={{ my: 2, display: 'flex', flexDirection: 'row' }}>
          <MyBox sx={{ width: 'auto' }}>
            Box1
          </MyBox>
          <Spacer/>
          <MyBox sx={{ width: 'auto' }}>
            Box2
          </MyBox>
          <Spacer/>
          <MyBox sx={{ width: 'auto' }}>
            Box3
          </MyBox>
        </MyBox>
        <BlockTitle title="Direction = row-reverse"/>
        <MyBox sx={{ my: 2, display: 'flex', flexDirection: 'row-reverse' }}>
          <MyBox sx={{ width: 'auto' }}>
            Box1
          </MyBox>
          <Spacer/>
          <MyBox sx={{ width: 'auto' }}>
            Box2
          </MyBox>
          <Spacer/>
          <MyBox sx={{ width: 'auto' }}>
            Box3
          </MyBox>
        </MyBox>
        <BlockTitle title="Sizing"/>
        <MyBox sx={{ my: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <MyBox sx={{ maxWidth: 'xs' }}>
            maxWidth: 'xs'
          </MyBox>
          <Spacer/>
          <MyBox sx={{ maxWidth: 'sm' }}>
            maxWidth: 'sm'
          </MyBox>
          <Spacer/>
          <MyBox sx={{ maxWidth: 'md' }}>
            maxWidth: 'md'
          </MyBox>
          <Spacer/>
          <MyBox sx={{ maxWidth: 'lg' }}>
            maxWidth: 'lg'
          </MyBox>
          <Spacer/>
          <MyBox sx={{ maxWidth: 'xl' }}>
            maxWidth: 'xl'
          </MyBox>
          <Spacer/>
          <MyBox sx={{ width: '80%' }}>
            width: '80%'
          </MyBox>
        </MyBox>
      </Paper>
    </Base>
  )
}
