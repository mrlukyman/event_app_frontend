import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';

const NEW_EVENT = gql`
  mutation createEvent($name: String!, $description: String!, $thumbnail: String!, $date: String!) {
    createEvent(eventInput: {name: $name, description: $description, thumbnail: $thumbnail, date: $date}) {
      _id
      name
      description
      thumbnail
      date
    }
  }
`

export const Form = () => {
  const [createEvent, newEvent] = useMutation(NEW_EVENT)

  const onSubmit = (data: any) => {
    createEvent({ variables: { name: data.name, description: data.description, thumbnail: data.thumbnail, date: data.date } })
  }

  const submit = (e: any) => {
    e.preventDefault()
    onSubmit(e.target)
  }

  const {
    register,
    //handleSubmit,
    formState: { errors },
  } = useForm()

  // const sendData = (data: any) => {
  //   console.log(data)
  // }
  return (
    <>
      <p>pica</p>
      <form onSubmit={submit}>
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
        <input type="datetime-local"{...register('date', { required: true })} />
        {errors.date?.type === 'required' && (
          <p role="alert">Date is required</p>
        )}
        <label>Image</label>
        <input type="file"{...register('image')} />

        <input type="submit" name="submit" />

      </form>
      <Link to="/">
        <button>XXX</button>
      </Link>
    </>
  )
}