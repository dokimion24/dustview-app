import React, { useEffect, useState } from 'react'
import { fetchCityData } from '@/modules/dust'
import { useDispatch } from 'react-redux'

const CitySelect = () => {
  const [city, setCity] = useState('서울')
  const dispatch = useDispatch()

  console.log('city', city)

  const HandleSelectCity = (e) => {
    setCity(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchCityData(city))
  }, [city])

  return (
    <div>
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
