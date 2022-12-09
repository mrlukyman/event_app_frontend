import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img, picture, svg, video {
  display: block;
  max-width: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 10rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`



export const SmallText = styled.p`
  font-size: 0.7rem;
  color: ${colors.text};
`
export const TitleHeading = styled.h2`
  font-size: 1.15rem;
  color: ${colors.text};
`

export default GlobalStyle
