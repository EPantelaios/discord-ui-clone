import { useMemo } from 'react';

import { Link } from 'react-router-dom';

import { deviceSize } from '../../../config/device';
import NavBarLogo from '../../Homepage/Layout/NavBarContent/NavBarLogo';
import InputLayout from '../../UI/InputLayout';
import {
  CardContent,
  LogoIconWrapper,
  TitleWrapper,
  Form,
  Title,
  Label,
  RegisterButton,
  LoginLink,
} from './Register.style';

type Props = {
  width?: number;
};

function Register(props: Props) {
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
      {isScreenSmall && (
        <LogoIconWrapper>
          <NavBarLogo />
        </LogoIconWrapper>
      )}
      <TitleWrapper>
        <Title>{'Create an account'}</Title>
      </TitleWrapper>
      <Form>
        <Label>EMAIL</Label>
        <InputLayout type="email" />
        <Label>USERNAME</Label>
        <InputLayout type="text" />
        <Label>PASSWORD</Label>
        <InputLayout type="password" />
        {/* <Label>DATE OF BIRTH</Label> */}
        {/* <DateWrapper> */}
        {/* <InputLayout type="month" placeholder="Month" /> */}
        {/* <InputLayout type="number" placeholder="Day" /> */}
        {/* <InputLayout type="number" placeholder="Year" /> */}
        {/* </DateWrapper> */}
        <RegisterButton>Continue</RegisterButton>
        <LoginLink>
          <Link to="/login">Already have an account?</Link>
        </LoginLink>
      </Form>
    </CardContent>
  );
}

export default Register;
