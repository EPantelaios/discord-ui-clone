import { memo } from 'react';

import useResizeObserver from 'use-resize-observer';

import { Container, CardContainer } from './AuthPage.style';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthFormBackgroundImage from '../UI/AuthFormBackgroundImage/AuthFormBackgroundImage';

type Props = {
  login?: boolean;
  register?: boolean;
};

function AuthPage(props: Props) {
  const { ref, width } = useResizeObserver<HTMLDivElement>({
    box: 'border-box',
  });

  return (
    <>
      <Container ref={ref}>
        <AuthFormBackgroundImage />
        <CardContainer>
          {!props.login && !props.register && <Login width={width} />}
          {props.login && <Login width={width} />}
          {props.register && <Register width={width} />}
        </CardContainer>
      </Container>
    </>
  );
}

export default memo(AuthPage);
