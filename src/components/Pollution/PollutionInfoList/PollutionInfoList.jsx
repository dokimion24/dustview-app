import React from 'react'
import { useSelector } from 'react-redux'
import PollutionInfoItem from '../PollutionInfoItem/PollutionInfoItem'

const PollutionInfoList = ({ pollutionInfos }) => {
  return (
    <div>
      {pollutionInfos.map((pollutionInfo) => (
        <PollutionInfoItem key={pollutionInfo.stationName} pollutionInfo={pollutionInfo} />
      ))}
    </div>
  )
}

export default PollutionInfoList
