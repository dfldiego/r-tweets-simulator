import React from 'react';
import { Modal } from '@material-ui/core';

import './ModalContainer.scss';

const ModalContainer = (props) => {

    //children: es todo lo que está dentro del  <ModalContainer>
    const { isOpenModal, closeModal, children } = props;

    return (
        <>
            <Modal
                className="modal-container"
                open={isOpenModal}
                onClose={closeModal}
                closeAfterTransition
            >
                <div>{children}</div>
            </Modal>
        </>
    )
}

export default ModalContainer

/**
 * Modal :
 * open={isOpenModal} --> el modal estará abierto si isOpenModal = true
 * onClose={closeModal} --> si clickeamos afuera ejecuta esa funcion
 */