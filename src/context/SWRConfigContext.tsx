'use client'
import React from 'react'
import {SWRConfig} from 'swr'

type Props = {
  children: React.ReactNode;
}

const SwrConfigContext = ({children}: Props) => {
  /**
   * fetcher - string 타입의 "url"을 인자로 받아 데이터 통신(fetch)
   * 응답은 "JSON"으로 변환
   */
  return (
    <SWRConfig
      value = {{
        fetcher: (url: string) => fetch(url).then((res) => res.json())
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SwrConfigContext