import PostItem from 'components/PostItem'
import { Post } from 'interfaces/post'

type PostProps = {
  posts: Post[]
}

const PostsList = ({ posts }: PostProps) => {
  return (
    <>
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <PostItem
              id={post.id}
              key={post.id}
              date={post.date}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              type={post.type}
              typeColor={post.typeColor}
            />
          )
        })}{' '}
      {posts.length === 0 && <p>Não há posts</p>}
    </>
  )
}

export default PostsList
