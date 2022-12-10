import { useMutation, gql } from '@apollo/client';

export const NEW_EVENT = gql`
  mutation createEvent(
    $title: String!, 
    $description: String, 
    $thumbnailUrl: String, 
    $price: Float,
    $date: Date!): Event
  ) {
    createEvent(
      title: $title, 
      description: $description, 
      thumbnailUrl: $thumbnailUrl, 
      price: $price,
      date: $date
    ) {
      id
      title
      description
      thumbnailUrl
      date
    }
  }
`
