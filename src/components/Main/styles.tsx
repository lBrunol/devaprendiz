import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr;
  gap: var(--gutter);
`
export const Aside = styled.aside`
  height: 100vh;
  background-color: var(--medium-bg);
  padding: var(--gutter);
  border-right: 1px solid var(--highlight);
`
export const Main = styled.main`
  min-height: 100vh;
  background-color: var(--main-bg);
  padding: var(--gutter);
`
