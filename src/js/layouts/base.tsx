import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {atom, useRecoilState} from 'recoil'
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
  createTheme,
  ThemeProvider,
  Switch,
  FormControlLabel,
  PaletteMode,
} from '@mui/material'
import {
  Home as HomeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'

import MenuItems from '../components/menu-items'

export default function Base({children, title}: any) {
  const paletteState = atom({
    key: 'mode',
    default: 'light' as PaletteMode
  })
  const [paletteMode, setPaletteMode] = useRecoilState<PaletteMode>(paletteState)
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false)

  const currentTheme = createTheme({
    palette: {
      mode: paletteMode,
    },
  })

  const toggleDrawer = () => {
    setOpenedDrawer(!openedDrawer)
  }

  const togglePaletteMode = () => {
    setPaletteMode(paletteMode == 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material design demo
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={paletteMode == 'dark'}
                onChange={togglePaletteMode}
              />
            }
            label="Dark"
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openedDrawer}
        onClose={toggleDrawer}
      >
        <Box
          sx={{ width: 250 }}
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem button component={ Link } to="/">
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </List>
          <Divider/>
          <MenuItems/>
        </Box>
      </Drawer>

      <Typography variant="h3" color="primary" sx={{ my: 3, textAlign: 'center' }}>{ title }</Typography>

      <Box>
        { children }
      </Box>
    </ThemeProvider>
  )
}
