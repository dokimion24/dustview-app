import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;

  & a {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    color: var(--color-main);
  }
`

export const Button = styled.button`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  color: var(--color-main);

  & a {
    height: 100%;
    color: var(--color-main);
  }
`
