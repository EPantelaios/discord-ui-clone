import { useMemo, useState, useRef } from 'react';

import { Link } from 'react-router-dom';

import { deviceSize } from '../../../config/device';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import dates from '../../../utils/dates';
import NavBarLogo from '../../Homepage/Layout/NavBarContent/NavBarLogo';
import Card from '../../UI/Card/Card';
import CheckBox from '../../UI/CheckBox/CheckBox';
import InputLayout from '../../UI/InputLayout/InputLayout';
import DateDropDownMenu from './DateDropDownMenu';
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
  const { width } = props || 0;

  const [day, setDay] = useState<string | number>('');
  const [month, setMonth] = useState<string | number>('');
  const [year, setYear] = useState<string | number>('');

  const [isDayDropdownMenuOpen, setIsDayDropdownMenuOpen] = useState(false);
  const [isMonthDropdownMenuOpen, setIsMonthDropdownMenuOpen] = useState(false);
  const [isYearDropdownMenuOpen, setIsYearDropdownMenuOpen] = useState(false);

  const [isCheckedMainTerm, setIsCheckedMainTerm] = useState(false);
  const [isCheckedOptionalTerm, setIsCheckedOptionalTerm] = useState(false);

  const refDay = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const refMonth = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  const refYear = useRef<HTMLDivElement>(
    null
  ) as React.MutableRefObject<HTMLDivElement>;

  useOnClickOutside(refDay, () => setIsDayDropdownMenuOpen(false));
  useOnClickOutside(refMonth, () => setIsMonthDropdownMenuOpen(false));
  useOnClickOutside(refYear, () => setIsYearDropdownMenuOpen(false));

  const isScreenSmall = useMemo(() => {
    if (width && width < deviceSize.datePageTablet) {
      return true;
    }
    return false;
  }, [width]);

  return (
    <Card>
      <CardContent>
        {isScreenSmall && (
          <LogoIconWrapper>
            <NavBarLogo />
          </LogoIconWrapper>
        )}
        <TitleWrapper>
          <Title>{'Create an account'}</Title>
        </TitleWrapper>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Label htmlFor="email">EMAIL</Label>
          <InputLayout id="email" type="email" />
          <Label htmlFor="username">USERNAME</Label>
          <InputLayout id="username" type="text" autoComplete="username" />
          <Label htmlFor="password">PASSWORD</Label>
          <InputLayout
            id="password"
            type="password"
            autoComplete="new-password"
          />
          <Label htmlFor="birthDate">DATE OF BIRTH</Label>

          <DateWrapper id="birthDate">
            <InputWrapper
              ref={refMonth}
              onClick={() => setIsMonthDropdownMenuOpen((prev) => !prev)}
            >
              {isMonthDropdownMenuOpen && (
                <DateDropDownMenu
                  data={dates.month}
                  onSelect={(data) => setMonth(data)}
                />
              )}
              <InputDate
                type="text"
                placeholder="Month"
                value={month}
                onChange={() => {}}
              />
              <ArrowDownIcon />
            </InputWrapper>

            <InputWrapper
              ref={refDay}
              onClick={() => setIsDayDropdownMenuOpen((prev) => !prev)}
            >
              {isDayDropdownMenuOpen && (
                <DateDropDownMenu
                  data={dates.day}
                  onSelect={(data) => setDay(data)}
                />
              )}
              <InputDate
                type="text"
                placeholder="Day"
                value={day}
                onChange={() => {}}
              />
              <ArrowDownIcon />
            </InputWrapper>

            <InputWrapper
              ref={refYear}
              onClick={() => setIsYearDropdownMenuOpen((prev) => !prev)}
            >
              {isYearDropdownMenuOpen && (
                <DateDropDownMenu
                  data={dates.year}
                  onSelect={(data) => setYear(data)}
                />
              )}
              <InputDate
                type="text"
                placeholder="Year"
                value={year}
                onChange={() => {}}
              />
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
          <RegisterButton disabled={!isCheckedMainTerm}>
            Continue
          </RegisterButton>
          <LoginLink>
            <Link to="/login">Already have an account?</Link>
          </LoginLink>
        </Form>
      </CardContent>
    </Card>
  );
}

export default Register;
