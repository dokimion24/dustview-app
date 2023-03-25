import React, { useEffect, useState } from 'react'
import PollutionInfoList from '@/components/Pollution/PollutionInfoList/PollutionInfoList'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import { useSelector } from 'react-redux'

const Cities = () => {
  const { data, loading, error } = useSelector((state) => state.fetchReducer)

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  if (!data) return null

  // console.log('Cities data pollutionInfos,', pollutionInfos)
  const pollutionInfos = data.response.body.items
  console.log('Cities', data.response.body.items)

  return (
    <div>
      <CitySelect />
      <PollutionInfoList pollutionInfos={pollutionInfos} />
      <Menu />
    </div>
  )
}

export default Cities
