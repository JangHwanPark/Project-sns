import React from 'react'

type Props = {
  image?: string | null
}

const Avatar = ({image}: Props) => {
  return (
    <div className='w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[.15rem]'>
      <img
        className='rounded-full p-[.1rem]'
        alt='user profile'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  )
}

export default Avatar