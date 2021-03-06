import styled from 'styled-components'
import media from 'styled-media-query'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.nav<ContainerProps>`
  text-align: center;
  margin-top: 6rem;
  ${({ isMenuOpen }: ContainerProps) => media.lessThan('huge')`
    transform: ${isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'}
  `}
`

export const List = styled.ul`
  width: 100%;
  list-style: none;
`
export const Item = styled.li`
  color: var(--texts-second);
`
export const Link = styled.a`
  display: inline-block;
  color: var(--highlight);
  font-size: var(--font-xsmall);
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &::after {
    content: '';
    border: 3px solid transparent;
    display: block;
    transform: translateY(3px);
  }

  &:hover::after,
  &:focus::after,
  &:active::after {
    content: '';
    transition: all 0.2s ease-in-out;
    transform: translateY(0);
    border-color: var(--highlight);
    width: 100%;
  }
`
