import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const Profileinfo = ({profile, status, updateStatus}) => {
  if (!profile){
    return <Preloader />
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status}  updateStatus={updateStatus} />
      </div>
    </div>);
}

export default Profileinfo;