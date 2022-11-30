import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  background: grey;
  position: relative;
`
export const SmallText = styled.p`
  font-size: 0.7rem;
  margin: 0.5rem;
  color: white;
`
export const TitleHeading = styled.h2`
  font-size: 1.15rem;
  margin-left: 0.5rem;
  color: white;
`

export default GlobalStyle
