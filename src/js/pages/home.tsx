import React from 'react'
import { Link } from 'react-router-dom'

import {
  List,
  ListItem,
  ListItemIcon,
} from '@mui/material'
import {
  TextFields as TextFieldsIcon,
  Message as MessageIcon,
  SelectAll as SelectAllIcon,
  CardGiftcard as CardGiftcardIcon,
  Grid3x3 as Grid3x3Icon,
} from '@mui/icons-material'

import Base from '../layouts/base'

export default function Home() {
  return  (
    <Base title="Home">
      <List>
        <ListItem>
          <ListItemIcon><TextFieldsIcon/></ListItemIcon>
          <Link to="/text">Text</Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><MessageIcon/></ListItemIcon>
          <Link to="/message">Message</Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><SelectAllIcon/></ListItemIcon>
          <Link to="/selector">Selector</Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><CardGiftcardIcon/></ListItemIcon>
          <Link to="/card">Card</Link>
        </ListItem>
        <ListItem>
          <ListItemIcon><Grid3x3Icon/></ListItemIcon>
          <Link to="/grid">Grid</Link>
        </ListItem>
      </List>
    </Base>
  )
}
