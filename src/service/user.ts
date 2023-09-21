import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}
/**
 * addUser 함수: OAuth 인증을 통해 받아온 사용자 정보를 Sanity 데이터베이스에 추가.
 *
 * @param {Object} OAuthUser - 사용자 인증 정보가 담긴 객체.
 * @param {string} OAuthUser.id - 사용자의 고유 ID.
 * @param {string} OAuthUser.username - 사용자의 유저네임.
 * @param {string} OAuthUser.email - 사용자의 이메일 주소.
 * @param {string} OAuthUser.name - 사용자의 이름.
 * @param {string} OAuthUser.image - 사용자의 프로필 이미지 URL.
 *
 * @returns {Promise} - 데이터베이스에 사용자 정보를 생성하거나, 이미 존재할 경우 생성하지 않는 Promise 객체를 반환.
 *
 * 사용법:
 *
 * try {
 *   await addUser(OAuthUserData);
 * } catch (error) {
 *   console.error('사용자 추가 실패:', error);
 * }
 */
export async function addUser({id, username, email, name, image}: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    username,
    name,
    email,
    image,
    following:[],
    followers: [],
    bookmark: [],
  })
}
/**
 * client : sanity
 */
export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
    ...,
    "id": _id,
    following[]->{username, image},
    followers[]->{username, image},
    "bookmarks": bookmarks[]->_id
    }`
  )
}