import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            <div className={s.newpost}>
                <div>
                    <button>Add text</button>
                </div>
                <div>
                    <textarea></textarea>
                </div>
            </div>
            <div className={s.posts}>
                <Post text="zaza" likes={23}/>
                <Post text="zozo" likes={15}/>
                <Post text="zizi" likes={7}/>
            </div>
        </div>
    )
}
export default MyPosts