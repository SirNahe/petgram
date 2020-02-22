import styled from 'styled-components'

export const Button = styled.button`
  background: #deb887;
  border-radius: 3px;
  color: #fff;
  text-shadow: #000 0px 0px 2px, #000 0px 0px 1px;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
