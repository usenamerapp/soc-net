import React from 'react';
import styles from './Profile.module.css';
import Post from './Post/Post'

const Profile = () => {
    return (
        <div className={styles.content}>
            
           <Post />
        </div>)
}

export default Profile;