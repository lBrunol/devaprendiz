import * as S from './styles'
import SocialButton from '../SocialButton'
import ResumedAboutMe from '../ResumedAboutMe'
import MainNavigation from '../MainNavigation'
import NavigationControl from '../NavigationControl'
import { useState } from 'react'

type BaseProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <S.Container>
        <S.MobileHeader>
          <ResumedAboutMe
            name="Bruno Araújo"
            occupation="Tech Lead"
            about="Desenvolvedor Web apaixonado por tecnologia! Nas horas vagas jogo CS Go e leio sobre política internacional, astronomia e economia."
            imgPath="/bruno-perfil.jpeg"
            showMobile={true}
          ></ResumedAboutMe>
        </S.MobileHeader>
        <S.Aside isMenuOpen={isMenuOpen}>
          <ResumedAboutMe
            name="Bruno Araújo"
            occupation="Tech Lead"
            about="Desenvolvedor Web apaixonado por tecnologia! Nas horas vagas jogo CS Go e leio sobre política internacional, astronomia e economia."
            imgPath="/bruno-perfil.jpeg"
            showMobile={false}
          ></ResumedAboutMe>
          <MainNavigation></MainNavigation>
          <S.SocialButtonContainer>
            <SocialButton
              href="https://github.com/lbrunol"
              type="github"
              description={`Link para o GitHub`}
            ></SocialButton>
            <SocialButton
              href="https://www.linkedin.com/in/bruno-ara%C3%BAjo-82550199/"
              type="linkedin"
              description={`Link para o LinkedIn`}
            ></SocialButton>
            <SocialButton
              href="https://twitter.com/lbruno_alvesl"
              type="twitter"
              description={`Link para o Twitter`}
            ></SocialButton>
          </S.SocialButtonContainer>
        </S.Aside>
        <S.Main>{children}</S.Main>
        <S.MobileFooter>
          <NavigationControl
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          ></NavigationControl>
        </S.MobileFooter>
      </S.Container>
    </>
  )
}

export default Base
