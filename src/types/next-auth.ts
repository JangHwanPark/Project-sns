import NextAUth, {DefaultSession} from 'next-auth';

declare module 'next-auth' {
  /**
   * 사용자 정의 user 객체를 포함하는 확장된 세션 인터페이스.
   * user 객체에는 문자열인 사용자 이름 속성이 포함됩니다.
   *
   * 이 확장은 추가 사용자 세부 정보를 NextAuth 세션에 통합합니다.
   */
  interface Session {
    user: {
      username: string;
    } & DefaultSession['user'];
  }
}