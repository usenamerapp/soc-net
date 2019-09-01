import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
        <div className={styles.content}>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9Zo33u5CGGntITUINySBjZFWNdEqbqRAbB4J70LVnBez0MuZ" /> */}
            <div className={styles.item}>Post 1</div>
            <div className={styles.item}>Post 2</div >
            <div className={styles.item}>Post 3</div>
            <div className={styles.item}>Post 4</div>
        </div>)
}

export default Profile;