import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StationSelect = ({ setStation }) => {
  const { data, loading, error } = useSelector((state) => state.fetchReducer)
  const pollutionInfos = data?.response?.body?.items

  const HandleSelectStation = (e) => {
    const filteredPollutionInfo = pollutionInfos.filter(
      (pollutionInfo) => pollutionInfo.stationName === e.target.value,
    )
    setStation(...filteredPollutionInfo)
  }

  return (
    <div>
      <select name="station" onChange={HandleSelectStation}>
        {pollutionInfos?.map((pollutionInfo) => (
          <option value={pollutionInfo.stationName} key={pollutionInfo.stationName}>
            {pollutionInfo.stationName}
          </option>
        ))}
      </select>
    </div>
  )
}

export default StationSelect
