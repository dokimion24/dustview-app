import React, { useEffect, useState } from 'react'
import { fetchData } from '@/modules/dust'
import { useDispatch } from 'react-redux'
import PollutionInfoList from '../../Pollution/PollutionInfoList/PoulltionInfoList'

const MyCity = () => {
  // const ee = useSelector((state) => state.data)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchData('대구'))
  // }, [dispatch])

  return (
    <div>
      <PollutionInfoList />
    </div>
  )
}

export default MyCity
