import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './style.scss';
import {HelperText} from '@material/react-text-field';

const Сheckbox = (props) => {
  const {
    input,
    label,
    disabled,
    meta: { touched, error, active }
  } = props;
  return (
    <div className={className('custom-check', {
      'error-field': touched && error,
      disabled: disabled,
    })}>
      <label>
        <input
          type="checkbox"
          {...input}
        />
        <div className={className('custom-check__indicate', {
          'active': input.value,
        })}>
          {!active &&
          touched &&
          error &&
          (<HelperText>{error}</HelperText>)
          }
        </div>
        <span>{label}</span>
      </label>
    </div>
  );
};

Сheckbox.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  changeInput: PropTypes.func,
};

export default Сheckbox;
