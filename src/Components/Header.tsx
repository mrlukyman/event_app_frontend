import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, TitleHeading } from '../Styles/GlobalStyles'
import { colors } from '../Styles/colors'

const Button = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  background-color: ${colors.primary};
  border-radius: 0.35rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 2rem;
  padding: 0 0.8rem;
  &:hover {
    background-color: ${colors.secondary};
    height: 2.5rem;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.secondary};
  margin-bottom: 1rem;
  border-radius: 0 0 0.3rem 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem #0000004d;
`

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <TitleHeading>Event app</TitleHeading>
        <Button to="/create">Create Event</Button>
      </Wrapper>
    </Container>
  )
}