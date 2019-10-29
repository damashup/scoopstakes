import React from 'react';


import {
        FormInputDiv,
        FormInputInput,
        FormInputLabel} from './form-input.styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <FormInputDiv>
    <FormInputInput onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputDiv>
);

export default FormInput;
