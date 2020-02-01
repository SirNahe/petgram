import { css, keyframes } from 'styled-components'

const fadeInKeyFrames = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`
const slideInKeyFrames = keyframes`
  from {
    transform: translate3d(0, -100px, 0) scale(.5);
  }

  to {
    transform: translate3d(0, 0, 0) scale(.5);
  }
`

const loadingImageKeyFrames = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }

  10%, 30%, 50%, 70%, 90% {
    opacity: 0.4;
  }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `

export const slideIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${slideInKeyFrames} ${type};
  `

export const fadeLoading = ({
  time = '3s',
  type = 'ease-out',
  iterationCount = 'infinite'
} = {}) =>
  css`
    animation: ${time} ${loadingImageKeyFrames} ${type};
    animation-iteration-count: ${iterationCount};
  `
