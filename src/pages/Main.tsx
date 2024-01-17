import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'

type Props = {}

export default function Main({}: Props) {
  return (
    <>
        <Navbar/>
        <Routes>
        <Route path='/homePage' element={<HomePage/>}/>
        </Routes>
    </>
  )
}