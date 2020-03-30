import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {
  return (
    <div>
      <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>);
}

export default Profile;