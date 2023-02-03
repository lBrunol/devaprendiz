import * as S from './styles'
import SocialButton from '../SocialButton'
import ResumedAboutMe from '../ResumedAboutMe'
import MainNavigation from '../MainNavigation'
import NavigationControl from '../NavigationControl'
import { useEffect, useState } from 'react'
import fakePosts from 'posts'
import { Post } from 'interfaces/post'
import PostItem from 'components/PostItem'

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    if (fakePosts.length > 0) {
      console.log(fakePosts)
      setPosts(fakePosts)
    }
  }, [])
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
        <S.Main>
          {posts.length > 0 &&
            posts.map((post) => {
              return (
                <PostItem
                  id={post.id}
                  key={post.id}
                  date={post.date}
                  link={post.link}
                  title={post.title}
                  excerpt={post.excerpt}
                  type={post.type}
                  typeColor={post.typeColor}
                />
              )
            })}
        </S.Main>
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

export default Main
