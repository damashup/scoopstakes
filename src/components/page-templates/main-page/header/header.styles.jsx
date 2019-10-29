import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../../assets/nanzo-logo.svg';

import {
  colorPrimary,
  colorPrimaryDark,
  colorWhite,
  linkDefault,
  textBig,
  textSmall
  } from '../../../page-styles/base-styles';

export const HeaderDiv = styled.div`
  padding: 1rem;
  background-image: linear-gradient(to left bottom, ${colorPrimary}, ${colorPrimaryDark});
  display: flex;
  justify-content: space-between;
  ${textBig}
  color: ${colorWhite};
   
`;

    export const HeaderLogoLink = styled(Link)`
        ${linkDefault}
      `;

        export const HeaderLogo = styled(Logo)`
          height: 6rem;
          width: auto;  
        `;

    export const SignOutDiv = styled.div`
      color: currentColor;

      display: flex;
      flex-direction: column;
    `;

        export const WelcomeUserSpan = styled.span`
          text-align: right;
        `;

        export const SignOutLink = styled(Link)`
            color: currentColor;
            text-align: right;
            ${linkDefault}
            ${textSmall}

        `;

    export const SignInLink = styled(Link)`
      color: currentColor;
      ${linkDefault}
    `;

    