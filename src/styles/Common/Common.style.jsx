import styled from '@emotion/styled'

export const Header = styled.header`
  display: flex;
  height: 60px;
  border-bottom: 1px solid #ccc;
`

export const Container = styled.div`
  height: 100%;
  position: relative;
`
export const Content = styled.div`
  margin-top: 10px;

  height: 80%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`
