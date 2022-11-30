import React from "react"
import styled from "styled-components"
import { useQuery, gql } from '@apollo/client';
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

const GET_EVENTS = gql`
  query {
    events {
      name
      description
      thumbnailUrl
      date
    }
  }
`

export const EventPanel = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.events.map(({ _id, name, price, description, thumbnail, date }: any) => (
    <Container>
      <Button to="/create">Create Event</Button>
      <Card title={name} description={description} image={thumbnail} price={price} date={date} />
    </Container>
  ));
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