import { useEffect } from 'react';

import ReactDOM from 'react-dom';

import { BackdropContainer, ModalContainer } from './Modal.style';

type PropsBackdrop = {
  onClose: () => void;
};

type PropsModalOverlay = {
  isClosing?: boolean;
  children?: React.ReactNode;
};

type PropsModal = {
  isClosing?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Backdrop = (props: PropsBackdrop) => {
  return <BackdropContainer onClick={props.onClose} />;
};

const ModalOverlay = (props: PropsModalOverlay) => {
  return (
    <ModalContainer isClosing={props.isClosing}>
      {props.children}
    </ModalContainer>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = (props: PropsModal) => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const keydownHandler = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        props.onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  }, []);

  useEffect(() => {
    // Prevent scrolling to top when modal is open
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = 'fixed';
    return () => {
      // Restore scrolling to initial position when modal is closed
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollY || 0);
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay isClosing={props.isClosing}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
