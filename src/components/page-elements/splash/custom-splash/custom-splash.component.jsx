import React from 'react'

import {CustomSplashContainer} from './custom-splash.styles'

const CustomSplash = ({children, ...props}) => (
        <CustomSplashContainer {...props}>
            {children}
        </CustomSplashContainer>
    )
export default CustomSplash;
