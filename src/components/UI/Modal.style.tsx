import styled, { css } from 'styled-components';

export const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
  background-color: rgba(1, 1, 1, 0.2);
`;

export const ClosingAnimation = css`
  pointer-events: none;
  animation: slide-right 300ms ease-out forwards;

  @keyframes slide-right {
    from {
      opacity: 1;
      transform: translateX(0rem);
    }

    to {
      opacity: 0;
      transform: translateX(10rem);
    }
  }
`;

export const ModalContainer = styled.div<{ isClosing: boolean | undefined }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 20rem;
  height: 100vh;
  z-index: 2000000;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  word-wrap: break-word;
  animation: slide-left 300ms ease-out forwards;
  overflow: hidden;

  @keyframes slide-left {
    from {
      opacity: 0;
      transform: translateX(10rem);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  ${(props) =>
    props.isClosing &&
    `& ${ClosingAnimation}
    `}
`;
