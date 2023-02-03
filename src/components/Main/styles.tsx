import styled from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.div`
  display: grid;
  grid-template: 'aside main' 100vh / 2fr 8fr;
  gap: var(--gutter);
  ${media.lessThan('huge')`
    grid-template: 'mobileHeader' 10vh 'main' 82vh 'mobileFooter' 8vh / 1fr;
  `}
`
export const SocialButtonContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  font-size: var(--font-xlarge);
`
export const MobileHeader = styled.div`
  grid-area: mobileHeader;
  display: none;
  ${media.lessThan('huge')`
    display: flex;
  `}
`
export const MobileFooter = styled.div`
  grid-area: mobileFooter;
  display: none;
  padding: var(--gutter);
  background-color: var(--medium-bg);
  ${media.lessThan('huge')`
    display: flex;
    justify-content: center;
  `}
`

export const Aside = styled.aside`
  grid-area: aside;
  padding: var(--gutter);
  height: 100vh;
  background-color: var(--medium-bg);
  border-right: 1px solid var(--highlight);
  transition: transform 0.3s linear;
  ${({ isMenuOpen }: ContainerProps) => media.lessThan('huge')`
    position: absolute;
    width: 100%;
    transform: ${isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
    height: 95vh;
    z-index: 2;
  `}
`
export const Main = styled.main`
  grid-area: main;
  background-color: var(--main-bg);
  padding: var(--gutter);
  ${media.lessThan('huge')`
    overflow: auto;
  `}
`
