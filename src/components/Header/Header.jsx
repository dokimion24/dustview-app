import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/modules/dust'

import { useState } from 'react'

const Header = () => {
  const [city, setCity] = useState()
  const dispatch = useDispatch()

  const HandleSelectCity = (e) => {
    setCity(e.target.value)
  }

  useEffect(() => {
    dispatch(fetchData(city))
  }, [city])

  return (
    <div>
      <label>Filter by year</label>
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

export default Header
