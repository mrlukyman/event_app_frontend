import React from 'react'
import styled from 'styled-components'
import {  SmallText, TitleHeading } from '../Styles/GlobalStyles'
type Props = {
  title: String
  description: String
  price: number
  date: String
  image: any
}

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 15.5rem;
  height: 11rem;
  border-radius: 0.3rem;
  color: #fff;
`
const BoxBottomPart = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 10px;
  background-color: #00000086;
  border-radius: 0 0 0.3rem 0.3rem;
  z-index: 1;
`
const Image = styled.img`
  background: #f2f2f2;
  align-self: center;
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
`
const BoxEventInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`
export const Card = (props: Props) => {
  return (
    <Box>
      <Image src={props.image} alt=""></Image>
      <BoxBottomPart>
        <TitleHeading>{props.title}</TitleHeading>
        <SmallText>{props.description}</SmallText>
        <BoxEventInfo>
          <SmallText>{props.date}</SmallText>
          <SmallText>{props.price}</SmallText>
        </BoxEventInfo>
      </BoxBottomPart>
    </Box>
  )
}
