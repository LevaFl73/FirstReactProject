import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div>
            <div className={s.item}>{props.text}</div>
            <div>{props.likes} likes</div>
        </div>

    )
}
export default  Post