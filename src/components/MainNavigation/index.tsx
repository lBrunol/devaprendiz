import React from 'react'
import * as S from './styles'

const MainNavigation = () => (
  <S.Container>
    <S.List>
      <S.Item>
        <S.Link href="/">Home</S.Link>
      </S.Item>
      <S.Item>
        <S.Link href="/">Sobre mim</S.Link>
      </S.Item>
      <S.Item>
        <S.Link href="/">Portfólio</S.Link>
      </S.Item>
    </S.List>
  </S.Container>
)

export default MainNavigation
