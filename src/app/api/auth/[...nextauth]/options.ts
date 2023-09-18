import type {NextAuthOptions} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {addUser} from '@/service/user'

export const options: NextAuthOptions = {
  /** ### 외부 공급자 (OAuth) */
  providers: [
    /** GoogleProvider: 구글 외부 공급자 */
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET as string
    })
  ],
  /**
   * ### pages: 로그인, 로그아웃, 이메일 확인 처리
   * signIn:
   * signOut:
   * error:
   * verifyRequest:
   * newUser:
   */
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    /** Error code passed in query string as ?error= */
    error: '/auth/error',
    /** (used for check email message) */
    verifyRequest: '/auth/verify-request',
    /** New users will be directed here on first sign in (leave the property out if not of interest) */
    newUser: '/auth/new-user'
  },
  /** ### callbackUrl: 인증 후 사용자가 리다이렉션될 URL 지정 */
  callbacks: {
    async signIn({ user: {id, name, image, email} }) {
      /** 이메일이 없는경우 false 반환 */
      if(!email) return false;
      /** 이메일이 있는경우에만 addUser 반환 */
      addUser({
        id,
        name: name || '',
        image,
        email,
        username: email.split('@')[0],
      })
      return true;
    },
    async session({session}) {
      console.log(session)
      const user = session?.user;
      if (user){
        session.user = {
          ...user,
          username: user.email?.split('@')[0] || '',
        }
      }
      return session
    }
  },
  /** ### secret key : 사용자 세션 or JWT 토큰 서명 */
  secret: process.env.NEXTAUTH_SECRET
}