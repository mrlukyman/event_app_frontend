import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const sendData = (data: any) => {
    console.log(data)
  }
  return (
    <>
      <p>pica</p>
      <form onSubmit={handleSubmit(sendData)}>
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

        <input type="submit" />
      </form>
    </>
  )
}