import React from "react"
import styled from "styled-components"
import { Container } from "../Styles/GlobalStyles"
import { Card } from './Card'
import { Link } from "react-router-dom"

const Button = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: green;
  padding: 0.5rem;
  border-radius: 0.35rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #099809;

  }
`

export const EventPanel = () => {
  return (
    <Container>
      <Card
        title="title"
        description="description"
        price={10}
        date="date"
      />
      <Button to="/form">Create event</Button>
    </Container>
  )
}