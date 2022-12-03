import { memo } from 'react';

import useResizeObserver from 'use-resize-observer';

import AuthFormBackgroundImage from '../UI/AuthFormBackgroundImage';
import Card from '../UI/Card';
import { Container, CardContainer } from './AuthPage.style';
import Login from './Login/Login';
import Register from './Register/Register';

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
          <Card>
            {!props.login && !props.register && <Login width={width} />}
            {props.login && <Login width={width} />}
            {props.register && <Register width={width} />}
          </Card>
        </CardContainer>
      </Container>
    </>
  );
}

export default memo(AuthPage);
