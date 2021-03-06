import React from 'react';
import { useForm } from 'react-hook-form';

const StreamForm = ({ onSubmit, title, description }) => {
  const preloadedValue = {
    title,
    description
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: preloadedValue
  });

  return (
    <div className="ui segment">
      <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
        <div className={`field ${errors.title ? 'error' : ''}`}>
          <label htmlFor="title">Enter Title</label>
          <input
            id="title"
            {...register('title', {
              required: true
            })}
          />
          {errors.title && (
            <p className="ui pointing red basic label">Please enter a title.</p>
          )}
        </div>
        <div className={`field ${errors.description ? 'error' : ''}`}>
          <label htmlFor="description">Enter Description</label>
          <input
            id="description"
            {...register('description', { required: true })}
          />
          {errors.description && (
            <p className="ui pointing red basic label">
              Please enter a description.
            </p>
          )}
        </div>
        <button className="ui button">Submit</button>
      </form>
    </div>
  );
};

export default StreamForm;
