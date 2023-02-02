import React from 'react'
import * as S from './styles'

type Props = {
  imgPath: string
  name: string
  occupation?: string
  about: string
  showMobile: boolean
}

const ResumedAboutMe = ({
  imgPath,
  name,
  occupation = 'Link para uma rede social',
  about = 'Link para uma rede social',
  showMobile = true
}: Props) => (
  <S.Container showMobile={showMobile}>
    <S.Image src={imgPath} />
    <div>
      <S.Name>{name}</S.Name>
      <S.Occupation>{occupation}</S.Occupation>
      <S.About>{about}</S.About>
    </div>
  </S.Container>
)

export default ResumedAboutMe
