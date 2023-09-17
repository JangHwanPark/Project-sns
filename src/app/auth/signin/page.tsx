import React from 'react'
import {getServerSession} from 'next-auth'
import {options} from '@/app/api/auth/[...nextauth]/options'
import {redirect} from 'next/navigation'
import {getProviders} from 'next-auth/react'
import Signin from '@/components/Signin'

type Props = {
  searchParams: {
    callbackUrl: string
  }
}

const LoginPage = async ({ searchParams: {callbackUrl} }: Props) => {
  console.log(`callbackUrl: ${callbackUrl}`)
  const session = await getServerSession(options);
  if (session) redirect('/');

  const providers = (await getProviders() ?? {});
  return (
    <section className='flex justify-center mt-[30%]'>
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'}/>
    </section>
  )
}

export default LoginPage