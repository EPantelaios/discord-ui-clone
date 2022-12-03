import styled from 'styled-components';

import colors from '../../../config/colors';
import { device } from '../../../config/device';

export const CardContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  @media (min-width: 486px) {
    width: 80vw;
    max-width: 450px;
    height: 100%;
  }
`;

export const LogoIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${colors.white};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${colors.grey};
`;

export const Label = styled.label`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
`;

export const RequiredRedStar = styled.span`
  color: ${colors.red};
`;

export const ForgotPassword = styled.button`
  all: unset;
  font-size: 0.9rem;
  color: ${colors.deeplightblue};
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  text-align: center;
  font-size: 1rem;
  background-color: ${colors.blurple};
  color: ${colors.white};

  :hover {
    cursor: pointer;
    background-color: ${colors.blue};
  }
`;

export const LoginLink = styled.div`
  font-size: 0.9rem;

  & > a {
    user-select: initial;
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    -webkit-user-drag: initial;
    -webkit-touch-callout: initial;
    pointer-events: initial;
    margin-left: 0.2rem;
    color: ${colors.deeplightblue};

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
