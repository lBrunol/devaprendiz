import styled from 'styled-components'

export const Link = styled.a`
  color: var(--texts);
  transition: color 0.3s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: var(--highlight);
  }
`
