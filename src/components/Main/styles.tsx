import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: var(--gutter);
  ${media.lessThan('huge')`
    grid-template-columns: 1fr;
  `}
`
export const NavigationContainer = styled.div`
  ${media.lessThan('huge')`
    width: 100%;
    height: 8vh;
    background-color: var(--medium-bg);
    position: fixed;
    bottom: 0;
    right: 0;
  `}
`
export const SocialButtonContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  font-size: var(--font-xlarge);
  ${media.lessThan('huge')`
    display: none;
  `}
`
export const Aside = styled.aside`
  padding: var(--gutter);
  height: 100vh;
  background-color: var(--medium-bg);
  border-right: 1px solid var(--highlight);
  ${media.lessThan('huge')`
    height: 0;
    margin: 0;
    padding: 0;
  `}
`
export const Main = styled.main`
  height: 100vh;
  background-color: var(--main-bg);
  padding: var(--gutter);
  ${media.lessThan('huge')`
    padding-top: 10vh;
  `}
`
