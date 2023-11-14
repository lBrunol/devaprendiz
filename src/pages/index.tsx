import { useEffect, useState } from 'react'
import fakePosts from 'posts'
import { Post } from 'interfaces/post'
import PostsList from 'components/PostList'
import Base from 'components/Base'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    if (fakePosts.length > 0) {
      setPosts(fakePosts)
    }
  }, [])
  return (
    <Base>
      <PostsList posts={posts} />
    </Base>
  )
}
