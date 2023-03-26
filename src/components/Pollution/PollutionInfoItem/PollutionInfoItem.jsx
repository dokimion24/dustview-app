import React, { useEffect, useState } from 'react'
import { formatGrade } from '@/utils/formatGrade'

import { AiOutlineStar } from 'react-icons/ai'
import * as S from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem.style'
import { toggleFavReducer, addFav, deleteFav } from '@/modules/favorities'

import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const PollutionItem = ({ pollutionInfo }) => {
  const location = useLocation()

  const [isClicked, setIsClicked] = useState(false)
  const dispatch = useDispatch()

  const handleSet = () => {
    if (location.pathname === '/favorites') {
      setIsClicked(true)
    }
  }

  const HandleToggleFav = () => {
    !isClicked ? dispatch(addFav(pollutionInfo)) : dispatch(deleteFav(pollutionInfo))
    setIsClicked(!isClicked)
  }

  useEffect(() => {
    handleSet()
  }, [])

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
        {isClicked ? <AiOutlineStar color="red" /> : <AiOutlineStar color="black" />}
      </S.Icon>
    </>
  )
}

export default PollutionItem
