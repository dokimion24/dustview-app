import React from 'react'
import Menu from '@/components/Menu/Menu'
import { useSelector } from 'react-redux'
import PollutionInfoList from '@/components/Pollution/PollutionInfoList/PollutionInfoList'

const Favorites = () => {
  const pollutionInfos = useSelector((state) => state.toggleFavReducer)
  console.log(pollutionInfos)
  console.log('...render')

  return (
    <div>
      <Menu />
      <PollutionInfoList pollutionInfos={pollutionInfos} />
    </div>
  )
}

export default Favorites
