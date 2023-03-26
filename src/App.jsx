import React from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/Global'
import styled from '@emotion/styled'
import MyCity from '@/pages/MyCity/MyCity'
import Cities from '@/pages/Cities/Cities'
import Favorites from '@/pages/Favorites/Favorites'

import { store, persistor } from '@/store'
import { PersistGate } from 'redux-persist/integration/react'

const Container = styled.div`
  border: 1px solid #000;
  width: 700px;
  height: 70vh;
`

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<>로딩 시 표시할 jsx</>} persistor={persistor}>
        <GlobalStyle />
        <Container>
          <Routes>
            <Route path="/" element={<MyCity />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Container>
      </PersistGate>
    </Provider>
  )
}

export default App
