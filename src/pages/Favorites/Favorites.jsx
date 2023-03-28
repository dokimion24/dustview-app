import React from 'react'
import Menu from '@/components/Menu/Menu'
import { useSelector } from 'react-redux'
import PollutionInfoList from '@/components/Pollution/PollutionInfoList/PollutionInfoList'

import * as S from '@/styles/Common/Common.style'

const Favorites = () => {
  const pollutionInfos = useSelector((state) => state.toggleFavReducer)
  console.log(pollutionInfos)
  console.log('...render')

  return (
    <S.Container>
      <S.Content>
        <PollutionInfoList pollutionInfos={pollutionInfos} />
      </S.Content>
      <Menu />
    </S.Container>
  )
}

export default Favorites
