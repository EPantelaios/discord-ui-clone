import { useMemo } from 'react';

import { Link } from 'react-router-dom';

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
import { deviceSize } from '../../../config/device';
import NavBarLogo from '../../Homepage/Layout/NavBarContent/NavBarLogo';
import Card from '../../UI/Card/Card';
import InputLayout from '../../UI/InputLayout/InputLayout';

type Props = {
  width?: number;
};

function Login(props: Props) {
  const { width } = props || 0;

  const isScreenSmall = useMemo(() => {
    if (width && width < deviceSize.datePageTablet) {
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
    <Card>
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
          <Form onSubmit={(e) => e.preventDefault()}>
            <Label htmlFor="email">EMAIL OR PHONE NUMBER</Label>
            <InputLayout id="email" />
            <Label htmlFor="password">PASSWORD</Label>
            <InputLayout
              id="passoword"
              type="password"
              autoComplete="current-password"
            />
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
    </Card>
  );
}

export default Login;
