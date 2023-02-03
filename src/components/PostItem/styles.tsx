import styled from 'styled-components'
import media from 'styled-media-query'

type TagProps = {
  color: string
}

export const Link = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid var(--highlight);
  position: relative;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--mediumBg);
    cursor: pointer;
    time,
    h1,
    h2 {
      transition: all 0.2s linear;
      color: var(--highlight);
    }
  }

  ${media.lessThan('medium')`
    padding: 15px 15px 30px 15px;
  `}
`
export const Tag = styled.span`
  ${({ color }: TagProps) => `
    top: 7px;
    position: absolute;
    background-color: ${color};
    color: var(--main-bg);
    font-size: var(--font-xxxsmall);
    padding: 3px 6px;
    margin-left: var(--gutter);
  `}
  ${media.lessThan('medium')`
    top: initial;
    bottom: -1px;
    right: 0;
  `}
`

export const Date = styled.time`
  font-size: var(--font-xxxsmall);
`
export const Title = styled.h1`
  position: relative;
  font-size: var(--font-large);
  ${media.lessThan('medium')`
    position: static;
  `}
`
export const Excerpt = styled.h2`
  font-weight: 300;
  font-size: var(--font-xsmall);
`
