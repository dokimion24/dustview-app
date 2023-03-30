import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/Global'
import styled from '@emotion/styled'
import MyCity from '@/pages/MyCity/MyCity'
import Cities from '@/pages/Cities/Cities'
import Favorites from '@/pages/Favorites/Favorites'

import store from '@/store'

const Container = styled.div`
  padding: 20px;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  min-width: 600px;
  height: 80vh;
  min-height: 700px;
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
