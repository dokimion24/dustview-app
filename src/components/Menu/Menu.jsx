import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './Menu.style'
import { CiLocationOn, CiViewList, CiStar } from 'react-icons/ci'

const Menu = () => {
  return (
    <S.Container>
      <S.Button>
        <CiLocationOn size={28} />
        <Link to="/">내 지역</Link>
      </S.Button>
      <S.Button>
        <CiViewList size={28} />
        <Link to="/cities">전체 지역</Link>
      </S.Button>
      <S.Button>
        <CiStar size={28} />
        <Link to="/favorites">즐겨찾기</Link>
      </S.Button>
    </S.Container>
  )
}

export default Menu
