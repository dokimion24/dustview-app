import React from 'react'
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
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Content />
        <Menu />
      </Container>
    </>
  )
}

export default App
