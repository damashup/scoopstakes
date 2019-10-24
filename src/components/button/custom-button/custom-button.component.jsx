import React from 'react';

import {CustomButtonDiv} from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
  <CustomButtonDiv {...otherProps}>
    {children}
  </CustomButtonDiv>
);

export default CustomButton;
