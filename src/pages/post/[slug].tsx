import { Post } from 'interfaces/post'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import fakePosts from 'posts'
import * as S from './styles'

const PostPage = () => {
  const router = useRouter()
  const [post, setPost] = useState<Post>({} as Post)
  useEffect(() => {
    const { slug } = router.query
    const selectedPost = fakePosts.filter((fk) => fk.slug === slug)
    if (selectedPost.length > 0) {
      setPost(selectedPost.pop() as Post)
    }
  }, [router.query])

  return (
    <S.PostContent>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </S.PostContent>
  )
}
export default PostPage
