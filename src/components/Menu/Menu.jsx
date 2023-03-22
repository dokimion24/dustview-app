import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <button>
        <Link to="/">내 지역보기</Link>
      </button>
      <button>
        <Link to="/cities">전체 시도보기</Link>
      </button>
      <button>
        <Link to="/favorites">즐겨찾기</Link>
      </button>
    </div>
  )
}

export default Menu
