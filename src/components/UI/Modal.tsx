import { useEffect } from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

type PropsBackdrop = {
  onClose: () => void;
};

type PropsModalOverlay = {
  children?: React.ReactNode;
};

type PropsModal = {
  onClose: () => void;
  children?: React.ReactNode;
};

const Backdrop = (props: PropsBackdrop) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: PropsModalOverlay) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = (props: PropsModal) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
