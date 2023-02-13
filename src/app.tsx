import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import {RecoilRoot} from "recoil"
import Home from './pages/home'
import TextForm from './pages/text-form'
import Buttons from './pages/buttons'
import Selector from './pages/selector'
import Message from './pages/message'
import Card from './pages/card'
import Grid from './pages/grid'
import BoxLayout from './pages/box-layout'

export default function App() {

    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/text-form" element={<TextForm />} />
                        <Route path="/buttons" element={<Buttons />} />
                        <Route path="/message" element={<Message />} />
                        <Route path="/selector" element={<Selector/>}/>
                        <Route path="/card" element={<Card/>}/>
                        <Route path="/grid" element={<Grid/>}/>
                        <Route path="/box-layout" element={<BoxLayout/>}/>
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
