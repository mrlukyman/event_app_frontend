import React from 'react'
import styled from 'styled-components'
import { SmallText, TitleHeading } from '../Styles/GlobalStyles'
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
  max-width: 17.5rem;
  border-radius: 0.3rem;
  color: #fff;
  /* margin-right: 2rem; */
  margin-bottom: 2rem;
  box-shadow: 0 0 0.5rem 0.1rem #0000004d;
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
const Wrapper = styled.div`
  margin: 0 0.5rem;
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
        <Wrapper>
          <TitleHeading>{props.title}</TitleHeading>
          {/* <SmallText>{props.description}</SmallText> */}
          <BoxEventInfo>
            <SmallText>{props.date.toString().substring(0, 10)}</SmallText> {/* TODO: find a better solution to fix the date  */}
            <SmallText>{props.price}</SmallText>
          </BoxEventInfo>
        </Wrapper>
      </BoxBottomPart>
    </Box>
  )
}
