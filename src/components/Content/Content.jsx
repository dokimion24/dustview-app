import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AllCity from '@/components/Content/AllCity/AllCity'
import MyCity from '@/components/Content/MyCity/MyCity'
import Favorites from '@/components/Content/Favorites/Favorites'

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<MyCity />} />
      <Route path="/cities" element={<AllCity />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default Content
