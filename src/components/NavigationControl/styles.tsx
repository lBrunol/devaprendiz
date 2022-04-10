import styled from 'styled-components'
import media from 'styled-media-query'

export const Button = styled.button`
  border: 1px solid var(--texts);
  border-radius: 5px;
  padding: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: none;

  &:hover {
    background-color: var(--texts);

    span {
      background-color: var(--medium-bg);
    }
  }

  ${media.lessThan('huge')`
    display: flex;
  `}
`

export const Bar = styled.span`
  width: 80%;
  height: 2px;
  background-color: var(--texts);
  text-align: center;
  display: inline-block;
`
