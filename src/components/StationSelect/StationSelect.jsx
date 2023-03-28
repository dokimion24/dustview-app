import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCity } from '@/modules/city'

import * as S from '@/components/StationSelect/StationSelect.style'

const StationSelect = ({ setPollutionInfo }) => {
  console.log('..............')
  const data = useSelector((state) => state.fetchReducer.data)
  const city = useSelector((state) => state.selectCityReducer)

  const selectCitydispatch = useDispatch()

  const pollutionInfos = data?.response?.body?.items

  const HandleSelectStation = (e) => {
    const filteredPollutionInfo = pollutionInfos.find(
      (pollutionInfo) => pollutionInfo.stationName === e.target.value,
    )
    setPollutionInfo(filteredPollutionInfo)
    selectCitydispatch(selectCity(city.city, filteredPollutionInfo.stationName))
  }

  return (
    <>
      <S.Select name="station" onChange={HandleSelectStation} value={city.station}>
        {pollutionInfos?.map((pollutionInfo) => (
          <option value={pollutionInfo.stationName} key={pollutionInfo.stationName}>
            {pollutionInfo.stationName}
          </option>
        ))}
      </S.Select>
    </>
  )
}

export default StationSelect
