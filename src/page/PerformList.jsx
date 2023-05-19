import React from 'react'
import { useSelector } from 'react-redux'

export default function PerformList() {

    const performList = useSelector((state)=>(state.performList))

  return (
    <div>
        <h1>공연리스트</h1>
        
    </div>
  )
}
