/** User Data Model */
export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    /** Username : 사용자 아이디 */
    {
      title: 'Username',
      name: 'username',
      type: 'string'
    },
    /** Name : 사용자 이름 */
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    /** Email : 사용자 이메일 */
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    /** Image : 사용자 프로필 이미지 URL 주소 */
    {
      title: 'Image',
      name: 'image',
      type: 'string'
    },
    /** Following : 팔로우 수 */
    {
      title: 'Following',
      name: 'following',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}]
        }
      ],
      validation: (Rule) => Rule.unique(),
    },
    /** Following : 팔로워 수 */
    {
      title: 'Followers',
      name: 'followers',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}]
        }
      ],
      validation: (Rule) => Rule.unique(),
    },
    /** Bookmarks : 북마크 */
    {
      title: 'Bookmark',
      name: 'bookmark',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'post'}]
        },
      ],
      validation: (Rule) => Rule.unique(),
    }
  ]
}