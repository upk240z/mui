import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import {RecoilRoot} from "recoil"
import Home from './pages/home'
import Text from './pages/text'
import Selector from './pages/selector'
import Message from './pages/message'
import Card from './pages/card'
import Grid from './pages/grid'

export default function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/text" element={<Text />} />
            <Route path="/message" element={<Message />} />
            <Route path="/selector" element={<Selector/>}/>
            <Route path="/card" element={<Card/>}/>
            <Route path="/grid" element={<Grid/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

function Layout() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}
