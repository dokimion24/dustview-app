import React, { useState } from 'react'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import StationSelect from '@/components/StationSelect/StationSelect'
import PollutionItem from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem'

import * as S from '@/styles/Common/Common.style'
import { useCitySlice } from '@/store/citySlice'

const MyCity = () => {
  // const [pollutionInfo, setPollutionInfo] = useState('')
  const { city, dispatch } = useCitySlice()
  const {
    data: dust,
    isLoading,
    isError,
    isFetching,
  } = useGetDustsQuery(city.sidoName, {
    // 굳이 다시 data 의 내용을 꺼내서 set 하지 않아도,
    // 아래 코드를 통해서 바로 특정 filter 결과를 data 에 할당할 수 있습니다.
    selectFromResult: (result) => ({
      ...result,
      data: selectDustByStation(result, city.stationName),
    }),
  })

  return (
    // <S.Container>
    //   <S.Header>
    //     <CitySelect />
    //     <StationSelect setPollutionInfo={setPollutionInfo} />
    //   </S.Header>
    //   <S.Content>{pollutionInfo && <PollutionItem pollutionInfo={pollutionInfo} />}</S.Content>
    //   <Menu />
    // </S.Container>
    <div></div>
  )
}

export default MyCity
