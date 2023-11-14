import React from 'react'
import * as S from './styles'
import Link from 'next/link'

const MainNavigation = () => (
  <S.Container>
    <S.List>
      <S.Item>
        <Link href="/" passHref>
          <S.LinkNav>Home</S.LinkNav>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/about" passHref>
          <S.LinkNav>Sobre mim</S.LinkNav>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/" passHref>
          <S.LinkNav>Currículo</S.LinkNav>
        </Link>
      </S.Item>
      <S.Item>
        <Link href="/" passHref>
          <S.LinkNav>Portfólio</S.LinkNav>
        </Link>
      </S.Item>
    </S.List>
  </S.Container>
)

export default MainNavigation
