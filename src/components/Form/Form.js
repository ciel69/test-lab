import React from 'react';
import {Field, reduxForm} from 'redux-form'
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap'

import Text from '../Field/Text';
import Select from '../Field/Select';
import Сheckbox from '../Field/Сheckbox';

import validate from './validate';

import '@material/react-text-field/dist/text-field.css';
import './style.scss';

const Form = (props) => {
  const {handleSubmit, change} = props;

  const options = [
    {
      label: null,
      value: null,
    },
    {
      label: 'Russian Federation',
      value: 'ru',
    },
    {
      label: 'USA',
      value: 'usa',
    },
    {
      label: 'Germany',
      value: 'ger',
    },
    {
      label: 'Italy',
      value: 'italy',
    }
  ];

  return (
    <div className="app__form form">
      <div className="form__title">Request form</div>
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <Field
            name="email"
            label="Enter your E-Mail"
            component={Text}
            changeInput={change}
            type="email"
          />
        </div>
        <div className="form__row">
          <Field
            name="name"
            label="Enter your name"
            component={Text}
            changeInput={change}
            type="email"
          />
        </div>
        <div className="form__row">
          <Field
            name="country"
            label="Select your country"
            component={Select}
            options={options}
          />
        </div>
        <div className="form__row">
          <Field
            name="agree"
            label="I agree with Terms & Conditions"
            component={Сheckbox}
          />
        </div>
        <div className="form__buttons">
          <Button type="submit">Submit</Button>
          <Button variant="link">Hyperlink</Button>
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'formRequest',
  validate
})(Form);
