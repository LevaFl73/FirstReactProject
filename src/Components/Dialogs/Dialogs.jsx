import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.DialogsAndMessages}>
            <div className={s.dialogs}>
                <Dialog name="Илья Флейшман" id="1"/>
                <Dialog name="Лёва73" id="2"/>
                <Dialog name="Даниил Чернобровенко" id="3"/>
                <Dialog name="Ильюха Курганов" id="4"/>
            </div>
            <div className={s.messages}>
                <Message text="Если нужен - искать онли в скайпе"/>
                <Message text="Бомблю React- Путь самурая, пока получается!"/>
                <Message text="Люблю Жака Фреско!"/>
                <Message text="BMW Е30 - One Love"/>
            </div>
        </div>
    )
}

export default Dialogs