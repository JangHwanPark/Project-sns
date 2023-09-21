/**
 * 세션에서 얻을 수 있는 사용자 정보
 * 로그인한 사용자는 name, email, username 이라는 필수 타입을 가진다.
 * 이미지는 설정 했을수도 있고 안했을수도 있기에 옵셔널로 설정
 */
export type User = {
  name: string;
  email: string;
  username: string;
  image?: string;
}
/** SimpleUser 는 기존에 있던 User 타입에서 "username"과 "image"를 Pick(가져옴) */
export type SimpleUser = Pick<User, 'username' | 'image'>;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
}