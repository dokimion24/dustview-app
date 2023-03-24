import React from 'react'
import { formatGrade } from '@/utils/formatGrade'

const PollutionItem = ({ PollutionInfo }) => {
  console.log(PollutionInfo)
  return (
    <>
      <div>
        <h2>{PollutionInfo.stationName}</h2>
        <span>{PollutionInfo.sidoName}</span>
      </div>
      <div>{formatGrade(PollutionInfo.pm10Grade)}</div>
      <div>
        <span>미세먼지 수치 : {PollutionInfo.pm10Value}</span>
        <div>{PollutionInfo.dataTime}</div>
      </div>
    </>
  )
}

export default PollutionItem
