
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classses from './Modal.module.css';



const Backdrop = (props) => {

    return <div className={classses.backdrop} onClick={props.onClose} />;
};


const Modaloverlay = (props) => {

    return <div className={classses.modal}>

        <div className={classses.content} > </div>
        {props.children}


    </div>

};



const Modal = (props) => {


    const Overlay = document.getElementById('overlays');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, Overlay)}
            {ReactDOM.createPortal(<Modaloverlay> {props.children} </Modaloverlay>, Overlay)}
        </Fragment>
    );




};

export default Modal;

