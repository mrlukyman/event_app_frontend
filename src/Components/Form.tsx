import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';

const NEW_EVENT = gql`
  mutation CreateEvent($title: String!, $thumbnailUrl: String, $description: String, $price: Float) {
    createEvent(title: $title, thumbnailUrl: $thumbnailUrl, description: $description, price: $price) {
      id
      title
      description
      thumbnailUrl
      price
    }
  }
`

//create apache kafka message when user create event

export const Form = () => {
  const [formState, setFormState] = useState({
    title: "test",
    description: "sadooaskdokasd",
    price: "1.23",
    date: "2022-12-09T23:25:00.912Z",
    thumbnailUrl: "",
  })

  const [createEvent] = useMutation(NEW_EVENT, {
    variables: {
      title: formState.title,
      description: formState.description,
      id: 1,
      // thumbnailUrl: formState.thumbnailUrl,
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
          onChange={(e) => setFormState({ ...formState, price: e.target.value })}
        />
        {/* <label>thumbnailUrl</label>
        <input
          type="file"
          name="thumbnailUrl"
        /> */}
        {/* <label>Date</label>
        <input
          type="datetime-local"
          name="date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
        /> */}
        <input type="submit" name="submit" />
      </form>
      <Link to="/">
        <button>XXX</button>
      </Link>
    </>
  )
}
