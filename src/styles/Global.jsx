import React from 'react'
import { Global, css } from '@emotion/react'

const reset = css`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button,
  img,
  strong,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  footer,
  header,
  menu,
  nav,
  section,
  summary {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  body {
    line-height: 1.43;
    color: #222;
  }
  ol,
  ul {
    list-style: none;
  }
  li {
    list-style-type: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  a:visited {
    color: #000;
  }
  button {
    cursor: pointer;
    background-color: #fff;
  }
  select {
    border: none;
  }
`

const style = css`
  :root {
    --border-radius: 12px;
    --box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 1px;

    --color-good: #1977d2;
    --color-common: #388e3d;
    --color-bad: #f06b02;
    --color-verybad: #c72827;
    --color-unknown: #b2b2b2;
  }

  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const GlobalStyle = () => {
  return (
    <>
      <Global styles={style} />
      <Global styles={reset} />
    </>
  )
}

export default GlobalStyle
