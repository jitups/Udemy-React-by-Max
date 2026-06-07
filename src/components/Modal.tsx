import type { ModalProps } from '../types/Modal';
import classes from './Modal.module.css'

function Modal({children, onClose}:ModalProps) {
    return <>
        <div className={classes.backdrop} onClick={onClose}/>
        <dialog open className={classes.modal}>
            {children}
        </dialog>
        </>
}

export default Modal;