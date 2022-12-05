import styled from 'styled-components';

import LogoIconImage from '../../../assets/discord_logo_qrcode.png';
import QRCodeImage from '../../../assets/qr_code.png';
import colors from '../../../config/colors';
import { device } from '../../../config/device';

export const LoginWrapper = styled.div`
  width: 100%;
  background-color: ${colors.blurple};
`;

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const CardContent = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;

  @media ${device.datePageTablet} {
    width: 80vw;
    max-width: 450px;
    height: 100%;
  }

  @media ${device.tablet} {
    width: 90vw;
    max-width: 720px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
  }
`;

export const LeftSideCard = styled.div`
  width: 100%;
`;

export const RightSideCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
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

export const Subtitle = styled.h5`
  font-size: 0.8rem;
  color: ${colors.grey};
  line-height: 1.2rem;
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

  &:after {
    content: '*';
    font-size: 110%;
    color: ${colors.red};
    margin: 0 5px;
  }
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

export const LoginButton = styled.button`
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

export const RegisterText = styled.p`
  font-size: 0.9rem;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;

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

export const QRCodeWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const QRCode = styled.img.attrs(() => ({
  src: QRCodeImage,
  alt: 'QR Code',
}))`
  border: 8px solid ${colors.white};
  border-radius: 0.25rem;
`;

export const LogoIcon = styled.img.attrs(() => ({
  src: LogoIconImage,
}))`
  position: absolute;
  top: 36%;
  left: 36%;
  width: 30%;
  height: auto;
  -webkit-box-align: center;
  box-align: center;
`;
