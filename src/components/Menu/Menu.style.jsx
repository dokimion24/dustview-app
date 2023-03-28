import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 500px;
  height: 60px;
`

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  color: var(--color-main);
  flex-basis: 1;

  & a {
    color: var(--color-main);
  }
`
