import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/nanzo-logo.svg';

import {
  colorPrimary,
  colorPrimaryDark,
  colorWhite,
  textBig
} from '../../page-template/styles/base-styles';

export const HeaderDiv = styled.div`
  padding: 1rem;
  background-image: linear-gradient(to left bottom, ${colorPrimary}, ${colorPrimaryDark});
  display: flex;
  justify-content: space-between;
`;

    export const HeaderLogoLink = styled(Link)``;

        export const HeaderLogo = styled(Logo)`
          height: 6rem;
          width: auto;
          cursor: pointer;
        `;

    export const SignInLink = styled(Link)`
      ${textBig}
      color: ${colorWhite};
      cursor: pointer;
      text-decoration: none;
    `;