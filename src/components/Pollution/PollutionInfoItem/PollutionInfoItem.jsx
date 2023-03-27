import React, { useEffect, useState } from 'react'
import { formatGrade } from '@/utils/formatGrade'

import { AiOutlineStar } from 'react-icons/ai'
import * as S from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem.style'
import { addFav, deleteFav } from '@/modules/favorities'

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
    <S.Card>
      <S.PmContainer background={pollutionInfo.pm10Grade}>
        <S.PmWrapper>
          <div>{formatGrade(pollutionInfo.pm10Grade)}</div>
          <S.Item fontsize={32}>{pollutionInfo.pm10Value}</S.Item>
          <S.Item fontsize={12}>{pollutionInfo.dataTime}</S.Item>
        </S.PmWrapper>
      </S.PmContainer>
      <div>
        <S.Title>
          <h2>{pollutionInfo.stationName}</h2>
          <span>{pollutionInfo.sidoName}</span>
        </S.Title>
        <S.Icon onClick={HandleToggleFav}>
          {isClicked ? <AiOutlineStar color="red" /> : <AiOutlineStar color="black" />}
        </S.Icon>
      </div>
    </S.Card>
  )
}

export default PollutionItem
