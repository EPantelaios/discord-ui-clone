import { useEffect } from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

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
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: PropsModalOverlay) => {
  const classesModal = `${classes.modal} ${
    props.isClosing ? classes.closingAnimation : ''
  }`;

  return <div className={classesModal}>{props.children}</div>;
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = (props: PropsModal) => {
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
