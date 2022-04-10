import React from 'react'
import * as S from './styles'

type Props = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const NavigationControl = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <S.Button onClick={toggleMenu}>
      <S.Bar></S.Bar>
      <S.Bar></S.Bar>
      <S.Bar></S.Bar>
    </S.Button>
  )
}

export default NavigationControl
