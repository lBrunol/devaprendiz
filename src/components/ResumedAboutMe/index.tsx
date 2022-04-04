import React from 'react'
import * as S from './styles'

type Props = {
  imgPath: string
  name: string
  occupation?: string
  about: string
}

const ResumedAboutMe = ({
  imgPath,
  name,
  occupation = 'Link para uma rede social',
  about = 'Link para uma rede social'
}: Props) => (
  <S.Container>
    <S.Image src={imgPath} />
    <div>
      <S.Name>{name}</S.Name>
      <S.Occupation>{occupation}</S.Occupation>
      <S.About>{about}</S.About>
    </div>
  </S.Container>
)

export default ResumedAboutMe
