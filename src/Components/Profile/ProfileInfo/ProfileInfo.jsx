import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.topImg} src='https://s1.funon.cc/img/orig/201804/18/5ad6e716dc83e.png'/>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.ava}>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxKXYKVU-n_ogZOKko8YVnBSlcckXx1X2w-HoMgXL_YeXP0Ve-'/>
                </div>
                <div className={s.osebe}>
                    opisanie profilya
                </div>
            </div>

        </div>
    )
}
export default ProfileInfo