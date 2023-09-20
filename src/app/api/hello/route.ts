import {NextResponse} from 'next/server'
import {getServerSession} from 'next-auth'
import {options} from '@/app/api/auth/[...nextauth]/options'
import {getUserByUsername} from '@/service/user'

export async function GET(request: Request) {
  const session = await getServerSession(options);
  const user = session?.user;
  /**
   * 로그인 한 유저가 없다면 에러발생
   * 401 : Unauthorized (인증 토큰이 없거나 토큰이 유효하지 않음)
   */
  if (!user) {
    return new Response('Authentication Error', {status: 401});
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  )
}