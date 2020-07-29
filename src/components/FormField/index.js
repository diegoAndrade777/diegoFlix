import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

function FormField({ label, type, name, formValues, onChange }) {
  return (
    <label>
      <Input
        type={type}
        value={formValues}
        name={name}
        onChange={onChange}
      />
      <span>{label}:</span>
    </label>
  )
}

export default FormField;