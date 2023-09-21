'use client'
import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import {DetailUser} from '@/model/user'
import {FadeLoader} from 'react-spinners'
import Avatar from '@/components/Avatar'

const FollowingBar = () => {
  const {data, error, isLoading} = useSWR<DetailUser>('/api/follow')
  //const users = data?.following
  //const users = undefined
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ]

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {isLoading ? (
          <FadeLoader color='red'/>
      ) : (
        (!users || users.length === 0) && <p>{`You don't' have following`}</p>
      )}
      {users && users.length > 0 && (
        <ul className='w-full flex gap-3'>
          {users.map(({image, username}) => (
              <li key={username}>
                <Link
                  className='flex flex-col items-center w-20'
                  href={`/user/${username}`}
                >
                  <Avatar image={image} highlight/>
                  <p className='w-full text-sm text-center text-ellipsis overflow-hidden'>
                    {username}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </section>
  )
}

export default FollowingBar