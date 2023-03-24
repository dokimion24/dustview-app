import React from 'react'
import { useSelector } from 'react-redux'
import PollutionInfoItem from '../PollutionInfoItem/PollutionInfoItem'

const PollutionInfoList = () => {
  const { data, loading, error } = useSelector((state) => state.fetchReducer)

  if (loading) return <div>로딩중...</div>
  if (error) return <div>에러 발생</div>
  if (!data) return null

  const PollutionInfos = data.response.body.items

  return (
    <div>
      {PollutionInfos.map((PollutionInfo) => (
        <PollutionInfoItem PollutionInfo={PollutionInfo} />
      ))}
    </div>
  )
}

export default PollutionInfoList
