'use client'
import React from 'react'
import Link from 'next/link'
import HomeIcon from '@/components/ui/icons/HomeIcon'
import HomeFillIcon from '@/components/ui/icons/HomeFillIcon'
import SearchIcon from '@/components/ui/icons/SearchIcon'
import SearchFillIcon from '@/components/ui/icons/SearchFillIcon'
import NewIcon from '@/components/ui/icons/NewIcon'
import NewFillIcon from '@/components/ui/icons/NewFillIcon'
import {usePathname} from 'next/navigation'
import ColorButton from '@/components/ui/ColorButton'
import {log} from 'util'

const Navbar = () => {
  const menu = [
    {
      href: '/',
      icon: <HomeIcon/>,
      clickedIcon: <HomeFillIcon/>
    },
    {
      href: '/search',
      icon: <SearchIcon/>,
      clickedIcon: <SearchFillIcon/>
    },
    {
      href: '/new',
      icon: <NewIcon/>,
      clickedIcon: <NewFillIcon/>
    }
  ]
  /** pathName : 현재 경로를 가져옴 */
  const pathName = usePathname();
  console.log(pathName)
  return (
    <div className='flex justify-between items-center px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Instagram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map(item => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton text='Sign In' onClick={()=>{}}/>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar