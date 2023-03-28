import styled from '@emotion/styled'
import { css } from '@emotion/react'

const getCardBackgroundColor = (background) => {
  let backgroundColor

  switch (background) {
    case '1':
      backgroundColor = 'var(--color-good)'
      break

    case '2':
      backgroundColor = 'var(--color-common)'
      break

    case '3':
      backgroundColor = 'var(--color-bad)'
      break

    case '4':
      backgroundColor = 'var(--color-verybad)'
      break

    default:
      backgroundColor = 'var(--color-unknown)'
      break
  }
  return css`
    background: ${backgroundColor};
  `
}

export const PmContainer = styled.div`
  border-radius: var(--border-radius);
  padding: 20px 10px 0 10px;
  color: #fff;
  ${({ background }) => getCardBackgroundColor(background)};
`

export const PmWrapper = styled.div`
  text-align: center;
`

export const Item = styled.div`
  font-size: ${({ fontsize }) => fontsize}px;
`

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: var(--border-radius);
  margin-bottom: 10px;

  display: flex;
  height: 180px;
`

export const Title = styled.div`
  font-size: 20px;

  & h2 {
    display: inline-block;
    margin-right: 12px;
  }

  & span {
    font-size: 18px;
  }
`

export const Icon = styled.div`
  text-align: center;
  margin-bottom: 6px;
`
