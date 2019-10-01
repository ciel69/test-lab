import React from 'react';

import Form from './Form';

const FormWrap = () => {
  const submit = (val) => {
    console.log('submit', val);
  };

  return (
    <Form onSubmit={submit}/>
  )
};

export default FormWrap;