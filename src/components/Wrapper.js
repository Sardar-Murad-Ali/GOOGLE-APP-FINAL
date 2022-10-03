import React from 'react'
import Headers from './Headers'
import Categories from './Categories'
import { Outlet } from 'react-router-dom'
const Wrapper = () => {
    
  return (
    <div>
      <Headers/>
      <Categories/>
      <Outlet/>
    </div>
  )
}

export default Wrapper
