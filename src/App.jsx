import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import store from '@/store'

import GlobalStyle from './styles/Global'
import styled from '@emotion/styled'
import MyCity from '@/pages/MyCity/MyCity'
import Cities from '@/pages/Cities/Cities'
import Favorites from '@/pages/Favorites/Favorites'

const Container = styled.div`
  border: 1px solid #000;
  width: 700px;
  height: 70vh;
`

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Routes>
          <Route path="/" element={<MyCity />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </Provider>
  )
}

export default App
