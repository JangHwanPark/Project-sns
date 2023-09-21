'use client'
import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import {DetailUser} from '@/model/user'
import {FadeLoader} from 'react-spinners'
import Avatar from '@/components/Avatar'

const FollowingBar = () => {
  const {data, error, isLoading} = useSWR<DetailUser>('/api/follow')
  const users = data?.following
  console.log(`data?.following : ${users}`)
  return (
    <section>
      { isLoading ? (
          <FadeLoader color='red'/>
      ) : (
        (!users || users.length === 0) && <p>{`You don't' have following`}</p>
      )}
      {users && users.length > 0 &&
        <ul>
          {users.map((image, username) => (
              <li key={username}>
                <Link href={`/user/${username}`}>
                  <Avatar image={image} highlight/>
                  <p>{username}</p>
                </Link>
              </li>
            ))}
        </ul>
      }
    </section>
  )
}

export default FollowingBar