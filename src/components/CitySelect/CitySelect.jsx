import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCityData } from '@/modules/dust'
import { selectCity } from '@/modules/city'

import { CiLocationOn } from 'react-icons/ci'

const CitySelect = () => {
  const fetchDataDispatch = useDispatch()
  const selectCityDispatch = useDispatch()

  const city = useSelector((state) => state.selectCityReducer)
  console.log('cityobj', city)

  const HandleSelectCity = (e) => {
    selectCityDispatch(selectCity(e.target.value))
  }

  useEffect(() => {
    fetchDataDispatch(fetchCityData(city.city))
  }, [city])

  return (
    <div>
      <CiLocationOn />

      <select name="cities" onChange={HandleSelectCity}>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
        <option value="인천">인천</option>
        <option value="광주">광주</option>
        <option value="대전">대전</option>
        <option value="울산">울산</option>
      </select>
    </div>
  )
}

export default CitySelect
