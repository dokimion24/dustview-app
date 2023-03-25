import React from 'react'
import { useSelector } from 'react-redux'
import PollutionInfoItem from '../PollutionInfoItem/PollutionInfoItem'

const PollutionInfoList = ({ pollutionInfos }) => {
  // const { data, loading, error } = useSelector((state) => state.fetchReducer)

  // if (loading) return <div>로딩중...</div>
  // if (error) return <div>에러 발생</div>
  // if (!data) return null

  // const pollutionInfos = data.response.body.items
  // console.log(pollutionInfos)

  console.log(pollutionInfos)

  return (
    <div>
      {pollutionInfos.map((pollutionInfo) => (
        <PollutionInfoItem key={pollutionInfo.stationName} pollutionInfo={pollutionInfo} />
      ))}
    </div>
  )
}

export default PollutionInfoList
