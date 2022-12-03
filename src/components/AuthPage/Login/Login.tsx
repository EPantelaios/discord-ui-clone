import { useMemo } from 'react';

import { Link } from 'react-router-dom';

import { deviceSize } from '../../../config/device';
import NavBarLogo from '../../Homepage/Layout/NavBarContent/NavBarLogo';
import InputLayout from '../../UI/InputLayout';
import {
  CardContent,
  LeftSideCard,
  RightSideCard,
  LogoIconWrapper,
  TitleWrapper,
  Form,
  Title,
  Subtitle,
  Label,
  ForgotPassword,
  LoginButton,
  RegisterText,
  QRCodeWrapper,
  QRCode,
  LogoIcon,
} from './Login.style';

type Props = {
  width?: number;
};

function Login(props: Props) {
  const { width } = props;

  const isScreenSmall = useMemo(() => {
    if (width && width < 486) {
      return true;
    }
    return false;
  }, [width]);

  const isBigScreen = useMemo(() => {
    if (width && width >= deviceSize.tablet) {
      return true;
    }
    return false;
  }, [width]);

  return (
    <CardContent>
      <LeftSideCard>
        {isScreenSmall && (
          <LogoIconWrapper>
            <NavBarLogo />
          </LogoIconWrapper>
        )}
        <TitleWrapper>
          <Title>{'Welcome back!'}</Title>
          <Subtitle>{"We're so excited to see you again!"}</Subtitle>
        </TitleWrapper>
        <Form>
          <Label>EMAIL OR PHONE NUMBER</Label>
          <InputLayout />
          <Label>PASSWORD</Label>
          <InputLayout type="password" />
          <ForgotPassword>Forgot your password?</ForgotPassword>
          <LoginButton>Log In</LoginButton>
          <RegisterText>
            Need an account? <Link to="/register">Register</Link>
          </RegisterText>
        </Form>
      </LeftSideCard>
      {isBigScreen && (
        <RightSideCard>
          <QRCodeWrapper>
            <QRCode />
            <LogoIcon />
          </QRCodeWrapper>
          <TitleWrapper>
            <Title>{'Log in with QR Code'}</Title>
            <Subtitle>
              {'Scan this with the Discord mobile app to log in instantly.'}
            </Subtitle>
          </TitleWrapper>
        </RightSideCard>
      )}
    </CardContent>
  );
}

export default Login;