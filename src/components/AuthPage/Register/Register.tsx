import { useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import NavBarLogo from '../../Homepage/Layout/NavBarContent/NavBarLogo';
import CheckBox from '../../UI/CheckBox';
import InputLayout from '../../UI/InputLayout';
import {
  CardContent,
  LogoIconWrapper,
  TitleWrapper,
  Form,
  Title,
  Label,
  DateWrapper,
  InputWrapper,
  InputDate,
  ArrowDownIcon,
  TermsWrapper,
  Term,
  TermTextMain,
  TermTextOptional,
  RegisterButton,
  LoginLink,
} from './Register.style';

type Props = {
  width?: number;
};

function Register(props: Props) {
  const [isCheckedMainTerm, setIsCheckedMainTerm] = useState(false);
  const [isCheckedOptionalTerm, setIsCheckedOptionalTerm] = useState(false);
  const { width } = props;

  const isScreenSmall = useMemo(() => {
    if (width && width < 486) {
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
        <Label>DATE OF BIRTH</Label>

        <DateWrapper>
          <InputWrapper>
            <InputDate type="text" placeholder="Month" />
            <ArrowDownIcon />
          </InputWrapper>

          <InputWrapper>
            <InputDate type="text" placeholder="Day" />
            <ArrowDownIcon />
          </InputWrapper>

          <InputWrapper>
            <InputDate type="text" placeholder="Year" />
            <ArrowDownIcon />
          </InputWrapper>
        </DateWrapper>

        <TermsWrapper>
          <Term onClick={() => setIsCheckedMainTerm((prev) => !prev)}>
            <CheckBox checked={isCheckedMainTerm} />
            <TermTextMain>
              {"I have read and agree to Discord's"}{' '}
              <Link to="/terms">Terms of Service</Link> and{' '}
              <Link to="/privacy">Privacy Policy</Link>
            </TermTextMain>
          </Term>
          <Term onClick={() => setIsCheckedOptionalTerm((prev) => !prev)}>
            <CheckBox checked={isCheckedOptionalTerm} />
            <TermTextOptional>
              {
                '(Optional) It’s okay to send me emails with Discord updates, tips, and special offers. You can opt out at any time.'
              }
            </TermTextOptional>
          </Term>
        </TermsWrapper>
        <RegisterButton>Continue</RegisterButton>
        <LoginLink>
          <Link to="/login">Already have an account?</Link>
        </LoginLink>
      </Form>
    </CardContent>
  );
}

export default Register;
