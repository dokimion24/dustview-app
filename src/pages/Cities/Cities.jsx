import React, { useEffect, useState } from 'react'
import PollutionInfoList from '@/components/Pollution/PollutionInfoList/PollutionInfoList'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import { useSelector } from 'react-redux'

import * as S from '@/styles/Common/Common.style'

const Cities = () => {
  const data = useSelector((state) => state.fetchReducer.data)

  console.log('...render')

  // if (loading) return <div>로딩중...</div>
  // if (error) return <div>에러 발생</div>
  // if (!data) return null

  const pollutionInfos = data?.response?.body?.items
  // console.log('Cities data pollutionInfos,', pollutionInfos)
  // console.log('Cities', data.response.body.items)

  return (
    <div>
      <S.Header>
        <CitySelect />
      </S.Header>

      {pollutionInfos && <PollutionInfoList pollutionInfos={pollutionInfos} />}
      <Menu />
    </div>
  )
}

export default Cities
