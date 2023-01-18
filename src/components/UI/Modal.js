import React from "react";
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onDisplayCart}></div>
}

const ModalWindow = props => {
    return <div className={styles.modal}>
        <div>{props.children}</div>
    </div>
}

const Modal = props => {
    const portalElement = document.getElementById("overlays");
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onDisplayCart = {props.onDisplayCart}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </React.Fragment>
}

export default Modal