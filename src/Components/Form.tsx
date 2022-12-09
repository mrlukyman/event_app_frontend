import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';

const NEW_EVENT = gql`
  mutation createEvent($name: String!, $description: String!, $thumbnail: String!, $date: String!) {
    createEvent(name: $name, description: $description, thumbnail: $thumbnail, date: $date) {
      name
      description
      thumbnail
      date
    }
  }
`

//create apache kafka message when user create event

export const Form = () => {
  const [formState, setFormState] = useState({
    name: "test",
    description: "",
    date: "",
    price: "",
    thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/127869365/original/e90db80b74da67858e11b1167e339a66c11b50d0/create-a-random-3d-fortnite-thumbnail.png",
  })

  const [createEvent] = useMutation(NEW_EVENT, {
    variables: {
      name: formState.name,
      description: formState.description,
      date: formState.date,
      thumbnail: formState.thumbnail,
    }
  })



  // const onSubmit = (data: any) => {
  //   createEvent()
  //   console.log(data.name.value, data.description.value, data.date.value)
  // }

  // const submit = (e: any) => {
  //   e.preventDefault()
  //   onSubmit(e.target)
  // }

  // const {
  //   register,
  //   //handleSubmit,
  //   formState: { errors },
  // } = useForm()

  // const sendData = (data: any) => {
  //   console.log(data)
  // }

  return (
    <>
      {/* <form onSubmit={submit}>
        <label>Title</label>
        <input {...register('name', { required: true })} />
        {errors.name?.type === 'required' && (
          <p role="alert">Title is required</p>
        )}
        <label>Description</label>
        <input {...register('description', { required: true })} />
        {errors.decription?.type === 'required' && (
          <p role="alert">Description is required</p>
        )}
        <label>Price</label>
        <input {...register('price', { required: true })} />
        {errors.price?.type === 'required' && (
          <p role="alert">Price is required</p>
        )}
        <label>Date</label>
        <input
          type="datetime-local"
          {...register('date', { required: true })}
        />
        {errors.date?.type === 'required' && (
          <p role="alert">Date is required</p>
        )}
        <label>Image</label>
        <input type="file" {...register('image')} />

        <input type="submit" name="submit" />

      </form> */}
      <form onSubmit={(e) => {
        e.preventDefault()
        createEvent()
      }}>
        <label>Title</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}

        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={formState.description}
          onChange={(e) => setFormState({ ...formState, description: e.target.value })}
        />
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={formState.price}
          onChange={(e) => setFormState({ ...formState, price: e.target.value })}
        />
        <label>Thumbnail</label>
        <input
          type="file"
          name="thumbnail"
        />
        <label>Date</label>
        <input
          type="datetime-local"
          name="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        />
        <input type="submit" name="submit" />
      </form>
      <Link to="/">
        <button>XXX</button>
      </Link>
    </>
  )
}
