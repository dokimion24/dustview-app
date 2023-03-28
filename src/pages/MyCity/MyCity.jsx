import React, { useState } from 'react'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import StationSelect from '@/components/StationSelect/StationSelect'
import PollutionItem from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem'

import * as S from '@/styles/Common/Common.style'

const MyCity = () => {
  const [pollutionInfo, setPollutionInfo] = useState('')

  return (
    <S.Container>
      <S.Header>
        <CitySelect />
        <StationSelect setPollutionInfo={setPollutionInfo} />
      </S.Header>
      <S.Content>{pollutionInfo && <PollutionItem pollutionInfo={pollutionInfo} />}</S.Content>
      <Menu />
    </S.Container>
  )
}

export default MyCity
