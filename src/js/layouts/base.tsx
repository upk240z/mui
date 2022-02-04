import React, {useState} from 'react'
import { Link } from 'react-router-dom'

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
  Divider
} from '@mui/material'
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Menu as MenuIcon,
  TextFields as TextFieldsIcon,
  Message as MessageIcon,
  SelectAll as SelectAllIcon,
  CardGiftcard as CardGiftcardIcon,
  Grid3x3 as Grid3x3Icon,
} from '@mui/icons-material'

export default function Base({children, title}: any) {
  const [openedDrawer, setOpenedDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenedDrawer(!openedDrawer)
  }

  return (
    <>
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
          <List>
            <ListItem button component={ Link } to="/text">
              <ListItemIcon><TextFieldsIcon/></ListItemIcon>
              <ListItemText>Text</ListItemText>
            </ListItem>
            <ListItem button component={ Link } to="/message">
              <ListItemIcon><MessageIcon/></ListItemIcon>
              <ListItemText>Message</ListItemText>
            </ListItem>
            <ListItem button component={ Link } to="/selector">
              <ListItemIcon><SelectAllIcon/></ListItemIcon>
              <ListItemText>Selector</ListItemText>
            </ListItem>
            <ListItem button component={ Link } to="/card">
              <ListItemIcon><CardGiftcardIcon/></ListItemIcon>
              <ListItemText>Card</ListItemText>
            </ListItem>
            <ListItem button component={ Link } to="/grid">
              <ListItemIcon><Grid3x3Icon/></ListItemIcon>
              <ListItemText>Grid</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <h1 style={{ textAlign: 'center' }}>{ title }</h1>

      <Box>
        { children }
      </Box>
    </>
  )
}
