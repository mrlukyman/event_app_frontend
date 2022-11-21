import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Container } from '../Styles/GlobalStyles'

type Props = {
  title: String,
  description: String,
  price: number,
  date: String
}

const Box = styled.div`
        display: flex;
        flex-direction: column;
        width: 10.5rem;
        background: wheat;

    `
const BoxBottomPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: spacebetween;
  padding: 0rem 0.5rem;
`

export const Card = (props: Props) => {
  return (
    <Box>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <BoxBottomPart>
        <p>{props.price}</p>
        <p>{props.date}</p>
      </BoxBottomPart>
    </Box>
  )
}
