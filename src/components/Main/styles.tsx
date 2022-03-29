import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: var(--gutter);
`

export const SocialButtonContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  font-size: var(--font-xlarge);
`
export const Aside = styled.aside`
  padding: var(--gutter);
  height: 100vh;
  background-color: var(--medium-bg);
  border-right: 1px solid var(--highlight);
`
export const Main = styled.main`
  min-height: 100vh;
  background-color: var(--main-bg);
  padding: var(--gutter);
`
