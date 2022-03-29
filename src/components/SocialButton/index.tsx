import React from 'react'
import * as S from './styles'

type Props = {
  type:
    | 'twitter'
    | 'facebook'
    | 'dribble'
    | 'github'
    | 'youtube'
    | 'instagram'
    | 'behance'
    | 'linkedin'
  href: string
  description?: string
}

const SocialButton = ({
  type,
  href,
  description = 'Link para uma rede social'
}: Props) => (
  <S.Link href={href} target="_blank" aria-label={description}>
    <i className={`icon-${type}`}></i>
  </S.Link>
)

export default SocialButton
