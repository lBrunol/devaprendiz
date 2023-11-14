import { Post } from 'interfaces/post'
import * as S from './styles'

type PostContentProps = {
  post: Post
}

const PostContent = ({ post }: PostContentProps) => (
  <S.PostContent>
    <h1>{post.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.content || '' }}></div>
  </S.PostContent>
)
export default PostContent
