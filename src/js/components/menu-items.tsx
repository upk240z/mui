import React from "react"
import {Link} from "react-router-dom"

import {List, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import {
  CardGiftcard as CardGiftcardIcon, Grid3x3 as Grid3x3Icon,
  Message as MessageIcon, SelectAll as SelectAllIcon,
  SmartButton as SmartButtonIcon,
  TextFields as TextFieldsIcon
} from "@mui/icons-material"

export default function MenuItems() {
  return (
    <List>
      <ListItem button component={ Link } to="/text-form">
        <ListItemIcon><TextFieldsIcon/></ListItemIcon>
        <ListItemText>Text Form</ListItemText>
      </ListItem>
      <ListItem button component={ Link } to="/buttons">
        <ListItemIcon><SmartButtonIcon/></ListItemIcon>
        <ListItemText>Button</ListItemText>
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
  )
}
