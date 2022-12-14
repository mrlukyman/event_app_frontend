import React from "react"
import styled from "styled-components"
import { useQuery, gql } from '@apollo/client';
import { Container, TitleHeading } from "../Styles/GlobalStyles"
import { Card } from './Card'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: space-between;
`


const GET_EVENTS = gql`
  query {
    events {
      title
      description
      thumbnailUrl
      date
      price
    }
  }
`
export const EventPanel = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
  console.log(data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <TitleHeading>Avaliable events</TitleHeading>
      <Wrapper>
        {data.events.map((event: any) => (
          <Card
            title={event.title}
            description={event.description}
            price={event.price}
            date={event.date}
            image={event.thumbnailUrl}
          />
        ))}
      </Wrapper>
    </>
  )
}
// return (
//   <Container>

//     <Card
//       title="title"
//       description="description"
//       price={10}
//       date="date"
//       image='https://grapefestival.sk/storage/images/800x600/news/1668155172e1ea855b5b3fee8377622726fe599bf3.jpg?v=1'
//     />
//     <Button to="/form">Create event</Button>
//   </Container>
// )
// }
