import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './Menu.style'
import { CiLocationOn, CiViewList, CiStar } from 'react-icons/ci'

const Menu = () => {
  return (
    <S.Container>
      <Link to="/">
        <CiLocationOn size={28} />
        <span>내 지역</span>
      </Link>
      <Link to="/cities">
        <CiViewList size={28} />
        <span>전체 지역</span>
      </Link>
      <Link to="/favorites">
        <CiStar size={28} />
        <span>즐겨찾기</span>
      </Link>
    </S.Container>
  )
}

export default Menu
