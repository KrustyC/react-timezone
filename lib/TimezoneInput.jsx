import React from 'react';
import styled from 'styled-components';

import { inputPropTypes } from './utils/propTypes';

const Input = styled.input`
  width: 100%;
  padding: 9px 12px;
  font: inherit;
  box-sizing: border-box;
  outline: 0;
  background: #fff;
  border: 1px solid #e6ebec;
  border-radius: 2px;
  color: #474747;
`;

const TimezoneInput = ({
  inputProps, onFocus, onChange, value
}) => (
  <Input
    type="text"
    autoComplete="off"
    {...inputProps}
    onFocus={onFocus}
    onChange={onChange}
    value={value}
  />
);

TimezoneInput.staticProps = inputPropTypes;

export default TimezoneInput;
