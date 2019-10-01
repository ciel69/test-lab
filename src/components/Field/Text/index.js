import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import './style.scss';

const CustomText = (props) => {
  const {
    input,
    label,
    changeInput,
    disabled,
    meta: { touched, error, active }
  } = props;

  const clearValue = () => {
    changeInput(input.name, '');
  };

  return (
    <TextField
      className={className('custom-field', {
        'error-field': touched && error,
        'valid-field': input.value && !error,
        disabled: disabled,
      })}
      label={label}
      helperText={
        !active &&
        touched &&
        error &&
        <HelperText>{error}</HelperText>}
      onTrailingIconSelect={clearValue}
      trailingIcon={!input.value ? <MaterialIcon role="button"/> : <MaterialIcon role="button" icon="close"/>}
    ><Input
      value={input.value}
      {...input}
    />
    </TextField>
  );
};

CustomText.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  disabled: PropTypes.bool,
  changeInput: PropTypes.func,
};

export default CustomText;