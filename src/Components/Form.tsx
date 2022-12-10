import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';

const NEW_EVENT = gql`
  mutation CreateEvent($title: String!, $description: String, $date: Date!, $thumbnailUrl: String, $price: Float) {
    createEvent(title: $title, description: $description, date: $date, thumbnailUrl: $thumbnailUrl, price: $price) {
      title
      description
      thumbnailUrl
      date
      price
    }
  }
`

//create apache kafka message when user create event

export const Form = () => {
  const [formState, setFormState] = useState({
    title: "Form test pls work",
    description: "more",
    date: "2022-12-10T20:16:51.946Z",
    thumbnailUrl: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/127869365/original/e90db80b74da67858e11b1167e339a66c11b50d0/create-a-random-3d-fortnite-thumbnail.png",
    price: 1.22
  })

  const date = "2022-12-10T20:16:51.946Z";

  const [createEvent] = useMutation(NEW_EVENT, {
    variables: {
      title: formState.title,
      description: formState.description,
      thumbnailUrl: formState.thumbnailUrl,
      date: date,
      price: formState.price,
    }
  })



  // const onSubmit = (data: any) => {
  //   createEvent()
  //   console.log(data.title.value, data.description.value, data.date.value)
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
        <input {...register('title', { required: true })} />
        {errors.title?.type === 'required' && (
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

        <input type="submit" title="submit" />

      </form> */}
      <form onSubmit={(e) => {
        e.preventDefault()
        createEvent()
      }}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={formState.title}
          onChange={(e) => setFormState({ ...formState, title: e.target.value })}

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
          onChange={(e) => setFormState({ ...formState, price: parseFloat(e.target.value) })}
        />
        <label>thumbnailUrl</label>
        <input
          type="text"
          name="thumbnailUrl"
          value={formState.thumbnailUrl}
          onChange={(e) => setFormState({ ...formState, thumbnailUrl: e.target.value })}
        />
        <label>Date</label>
        <input
          type="text"
          name="date"
          value={date.toString()}
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
