import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
`

export const Name = styled.h2`
  font-size: var(--font-large);
  color: var(--texts-second);
`
export const Occupation = styled.h1`
  font-size: var(--font-medium);
  color: var(--texts-second);
  margin-bottom: var(--gutter);
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-self: center;
  margin-bottom: var(--gutter);
`
export const About = styled.p`
  font-size: var(--font-xsmall);
`
