import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return(
    <div clasNames={s.dialog}>{props.message}</div>
    )
}

export default Message;