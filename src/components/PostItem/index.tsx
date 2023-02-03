import { Post } from 'interfaces/post'
import Link from 'next/link'
import React from 'react'
import * as S from './styles'

const PostItem = ({ type, typeColor, date, title, excerpt, link }: Post) => (
  <Link href={link}>
    <S.Link>
      <S.Date>{date}</S.Date>
      <S.Title>
        {title}
        <S.Tag color={typeColor}>{type}</S.Tag>
      </S.Title>
      <S.Excerpt>{excerpt}</S.Excerpt>
    </S.Link>
  </Link>
)

export default PostItem
