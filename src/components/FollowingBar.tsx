'use client'
import React from 'react'
import useSWR from 'swr'

const FollowingBar = () => {
  const {data, error, isLoading} = useSWR('/api/hello')
  console.log(data)
  return <p>FollowingBar</p>
}

export default FollowingBar