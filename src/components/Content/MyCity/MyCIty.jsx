import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchData } from '@/modules/dust'
import { useDispatch, useSelector } from 'react-redux'

const MyCity = () => {
  // const ee = useSelector((state) => state.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData('대구'))
  }, [dispatch])

  return <div>MyCity</div>
}

export default MyCity
