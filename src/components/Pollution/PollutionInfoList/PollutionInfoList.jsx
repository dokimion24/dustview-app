import React from 'react'
import PollutionInfoItem from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem'
import * as S from '@/components/Pollution/PollutionInfoList/PollutionInfoList.style'

const PollutionInfoList = ({ pollutionInfos }) => {
  return (
    <>
      {pollutionInfos.map((pollutionInfo) => (
        <PollutionInfoItem key={pollutionInfo.stationName} pollutionInfo={pollutionInfo} />
      ))}
    </>
  )
}

export default PollutionInfoList
