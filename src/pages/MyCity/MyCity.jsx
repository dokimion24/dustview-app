import React, { useState } from 'react'
import Menu from '@/components/Menu/Menu'
import CitySelect from '@/components/CitySelect/CitySelect'
import StationSelect from '@/components/StationSelect/StationSelect'
import PollutionItem from '@/components/Pollution/PollutionInfoItem/PollutionInfoItem'
import { useSelector } from 'react-redux'

const MyCity = () => {
  const [station, setStation] = useState()

  const { data, loading, error } = useSelector((state) => state.fetchReducer)
  console.log('MyCity', data)
  console.log('MyCity station', station)

  return (
    <div>
      <CitySelect />
      <StationSelect setStation={setStation} />
      {station && <PollutionItem pollutionInfo={station} />}
      <Menu />
    </div>
  )
}

export default MyCity