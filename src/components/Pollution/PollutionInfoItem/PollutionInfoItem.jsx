import React from 'react'
import { formatGrade } from '@/utils/formatGrade'

import { AiOutlineStar } from 'react-icons/ai'
import * as S from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem.style'
import { toggleFavReducer, addFav, deleteFav } from '@/modules/favorities'

import { useDispatch } from 'react-redux'

const PollutionItem = ({ pollutionInfo }) => {
  const dispatch = useDispatch()

  const HandleToggleFav = () => {
    dispatch(addFav(pollutionInfo))
  }

  return (
    <>
      <div>
        <h2>{pollutionInfo.stationName}</h2>
        <span>{pollutionInfo.sidoName}</span>
      </div>
      <div>{formatGrade(pollutionInfo.pm10Grade)}</div>
      <div>
        <span>미세먼지 수치 : {pollutionInfo.pm10Value}</span>
        <div>{pollutionInfo.dataTime}</div>
      </div>

      <S.Icon onClick={HandleToggleFav}>
        <AiOutlineStar color="red" />
      </S.Icon>
    </>
  )
}

export default PollutionItem
