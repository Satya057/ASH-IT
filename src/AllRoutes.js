import React from 'react'
import { Route, Routes } from 'react-router-dom'

import FeaturedProperties from './Pages/Featured Properties'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<FeaturedProperties/>} />
       <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
    </Routes>
  )
}

export default AllRoutes