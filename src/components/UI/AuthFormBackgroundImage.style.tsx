import styled from 'styled-components';

import LoginBackGround from '../../assets/login_bg.png';

export const BackgroundImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
`;

export const BackgroundImage = styled.img.attrs(() => ({
  src: LoginBackGround,
}))`
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  width: clamp(1400px, 100%, 100vw);
`;
