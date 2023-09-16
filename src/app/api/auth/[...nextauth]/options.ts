import type { NextAuthOptions } from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        /** ### 깃허브 외부 공급자*/
        GoogleProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        }),
      ],
    secret: process.env.NEXTAUTH_SECRET
}