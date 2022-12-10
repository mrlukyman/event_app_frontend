import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from '../Styles/GlobalStyles'
import { colors } from '../Styles/colors'

const CreateEventButton = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  background-color: ${colors.primary};
  border-radius: 0 0 0.3rem 0;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 3rem;
  width: 10rem;
`
const DeleteEventButton = styled.button`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  background-color: ${colors.error};
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  height: 3rem;
  border: none;
  width: 10rem;
`

const ButtonWrapper = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.background};
  margin-bottom: 1rem;
  border-radius: 0 0 0.3rem 0.3rem;
  box-shadow: 0 0 0.5rem 0.1rem #0000004d;
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
  text-decoration: none;
  width: 10rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0 0.3rem;
`


export const Header = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const handleDeleteEvent = () => {
    setIsDeleting(true)
  }
  return (
    <Container>
      <Wrapper>
        <Logo to="/">Event app</Logo>
        <ButtonWrapper>
          <DeleteEventButton onClick={handleDeleteEvent}>Delete Event</DeleteEventButton>
          <CreateEventButton to="/form">Create Event</CreateEventButton>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}