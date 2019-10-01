import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import {HelperText} from '@material/react-text-field';

import Select from '@material/react-select';

import '@material/react-menu/dist/menu.css';
import '@material/react-select/dist/select.css';

const CustomSelect = (props) => {
  const {
    input,
    options = [],
    label,
    disabled,
    meta: { touched, error, active }
  } = props;

  return (
    <Select
      className={className('custom-field', {
        'error-field': touched && error,
        'valid-field': input.value && !error,
        disabled: disabled,
      })}
      label={label}
      value={input.value}
      options={options}
      helperText={
        !active &&
        touched &&
        error &&
        <HelperText>{error}</HelperText>}
      {...input}
    />
  );
};

CustomSelect.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  changeInput: PropTypes.func,
};

export default CustomSelect;