import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from '../../common/preloader/preloader';

const Profileinfo = (props) => {
  if (!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div class={s.img}>
        <img src='https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        ava + description
      </div>
    </div>);
}

export default Profileinfo;