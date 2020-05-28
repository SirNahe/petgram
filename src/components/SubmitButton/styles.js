import styled from 'styled-components'

export const Button = styled.button`
  background: #deb887;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
