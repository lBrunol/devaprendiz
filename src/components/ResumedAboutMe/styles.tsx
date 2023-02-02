import styled from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  showMobile: boolean
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  justify-content: center;
  align-content: baseline;
  text-align: center;
  margin-top: 2rem;

  ${({ showMobile }: ContainerProps) => media.lessThan('huge')`
    display: ${showMobile ? 'grid' : 'none'};
  `}

  ${media.lessThan('huge')`
    width: 100%;
    margin-top: 0;
    padding: var(--gutter);
    background-color: var(--medium-bg);
    grid-template-columns: 80px 8fr;
    justify-items: flex-start;
    top: 0;
    left: 0;
  `}
`

export const Name = styled.h2`
  font-size: var(--font-large);
  color: var(--texts-second);
  ${media.lessThan('huge')`
    font-size: var(--font-small);
  `}
`
export const Occupation = styled.h3`
  font-size: var(--font-medium);
  color: var(--texts-second);
  margin-bottom: var(--gutter);
  ${media.lessThan('huge')`
    font-size: var(--font-xsmall);
    margin-bottom: 0;
  `}
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  justify-self: center;
  margin-bottom: var(--gutter);
  ${media.lessThan('huge')`
    width: 50px;
    height: 50px;
    margin-bottom: 0;
  `}
`
export const About = styled.p`
  font-size: var(--font-xxsmall);
  ${media.lessThan('huge')`
    display: none;
  `}
`
