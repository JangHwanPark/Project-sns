/**
 * 로그인한 사용자는 name, email, username 이라는 필수 타입을 가진다.
 * 이미지는 설정 했을수도 있고 안했을수도 있기에 옵셔널로 설정
 */
export type User = {
  name: string;
  email: string;
  username: string;
  image?: string;
}