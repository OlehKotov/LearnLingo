import React, { useState } from 'react'
import css from "./SearchForm.module.css";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';


const languagesOptions = [
    { value: 'French', label: 'French' },
    { value: 'English', label: 'English' },
    { value: 'German', label: 'German' },
    { value: 'Ukrainian', label: 'Ukrainian' },
    { value: 'Polish', label: 'Polish' },
  ];
  
  const levelOptions  = [
    { value: 'A1 Beginner', label: 'A1 Beginner' },
    { value: 'A2 Elementary', label: 'A2 Elementary' },
    { value: 'B1 Intermediate', label: 'B1 Intermediate' },
    { value: 'B2 Upper-Intermediate', label: 'B2 Upper-Intermediate' },
  ];
  
  const priceOptions = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' },
    { value: 40, label: '40' },
  ];
  
  const SearchForm = () => {
    const { control, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Languages</label>
          <Controller
            name="languages"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={languagesOptions}
                placeholder="Select languages"
              />
            )}
          />
        </div>
  
        <div>
          <label>Level of Knowledge</label>
          <Controller
            name="level"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={levelOptions}
                placeholder="Select level of knowledge"
              />
            )}
          />
        </div>
  
        <div>
          <label>Price</label>
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={priceOptions}
                placeholder="Select price"
              />
            )}
          />
        </div>
  
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default SearchForm;