import { Post } from 'interfaces/post'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import fakePosts from 'posts'
import Base from 'components/Base'
import PostContent from 'components/PostContent'

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
    <Base>
      <PostContent post={post} />
    </Base>
  )
}
export default PostPage
