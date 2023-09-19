'use client'
import React from 'react'
import Avatar from '@/components/Avatar'
import {User} from '@/model/user';

type Props = {
  user: User;
}

const Sidebar = ({user: {name, email, username, image}}: Props) => {
  return (
    <aside>
      <div className='flex items-center'>
        {image && <Avatar image={image}/>}
        <div className='ml-4'>
          <p className='font-bold'>{username}</p>
          <p className='text-lg text-neutral-500 leading-4'>{name}</p>
        </div>
      </div>
      <p className='text-sm text-neutral-500 mt-8'>About · Help · Press · API · Jobs · Privacy · Terms · Location · Language</p>
      <p className='font-bold text-sm mt-8 text-neutral-500'>@Copyright INSTANTGRAM from META</p>
    </aside>
  )
}

export default Sidebar