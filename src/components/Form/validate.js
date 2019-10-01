const validate = values => {
  const errors = {};
  const requiredFields = [
    'email',
    'name',
    'country',
    'agree',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Enter correct E-Mail';
  }
  if (
    values.name &&
    !/^[a-zA-ZА-Я.\s-]*$/i.test(values.name)
  ) {
    errors.name = 'Enter correct name';
  }

  return errors;
};

export default validate;
