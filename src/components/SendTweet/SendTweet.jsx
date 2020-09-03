import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment';
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet';
import { TWEETS_STORAGE } from '../../utils/contants';

import './SendTweet.scss';

const SendTweet = ({ setToastprops }) => {
    //estado del modal
    const [isOpenModal, setIsOpenModal] = useState(false);

    //2 funciones del modal: abierto o cerrado
    const openModal = () => {
        setIsOpenModal(true);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
    const sendTweet = (e, formValue) => {
        e.preventDefault();
        const { name, tweet } = formValue;
        let allTweetArray = [];

        if (name.trim() === "" || tweet.trim() === "") {
            setToastprops({
                open: true,
                text: 'WARNING: Todos los campos son obligatorios'
            });
        } else {
            formValue.time = moment();
            allTweetArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetArray));
            //console.log("Tweet enviado correctamente");
            setToastprops({
                open: true,
                text: "Tweet enviado correctamente"
            });
            closeModal();
        }
        allTweetArray = [];
    }

    return (
        <div className="send-tweet">
            <Fab
                className="send-tweet__open-modal"
                color="primary"
                aria-label="add"
                onClick={openModal}
            >
                <AddIcon />
            </Fab>
            <ModalContainer
                isOpenModal={isOpenModal}
                closeModal={closeModal}
            >
                <FormSendTweet
                    sendTweet={sendTweet}
                />
            </ModalContainer>
        </div>
    )
}

export default SendTweet
