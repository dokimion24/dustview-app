import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'

import Header from '@/components/Header/Header'
import Content from '@/components/Content/Content'
import Menu from '@/components/Menu/Menu'
import GlobalStyle from './styles/Global'
import styled from '@emotion/styled'

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
        <Header />
        <Content />
        <Menu />
      </Container>
    </Provider>
  )
}

export default App
