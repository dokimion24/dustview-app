import React, { useState } from 'react'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import StationSelect from '@/components/StationSelect/StationSelect'
import PollutionItem from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem'

import * as S from '@/styles/Common/Common.style'

const MyCity = () => {
  const [station, setStation] = useState('중구')

  return (
    <div>
      <S.Header>
        <CitySelect />
        <StationSelect setStation={setStation} />
      </S.Header>
      {station && <PollutionItem pollutionInfo={station} />}
      <Menu />
    </div>
  )
}

export default MyCity
