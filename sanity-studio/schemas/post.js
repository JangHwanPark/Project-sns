/** Post Data Model */
export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    /** Author : 작성자 */
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}]
    },
    /** Photo : 게시글 이미지 */
    {
      title: 'Photo',
      name: 'photo',
      type: 'image'
    },
    /** Likes : 좋아요 버튼 */
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}]
        }
      ],
      validation: (Rule) => Rule.unique(),
    },
    /** Comments : 댓글 */
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            {
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}]
            },
            /** 실제 Text 스키마 */
            {
              title: 'Comment',
              name: 'comment',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  /** admin - 사용자 지정 설정 */
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo'
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection;
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media
      }
    }
  }
}