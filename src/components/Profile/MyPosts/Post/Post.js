import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return( 
      <div>
          <div className={s.item}>
            <img src='https://vokrug.tv/pic/product/1/9/6/b/196b75624f01724678dad79fab82b6fa.jpeg' />
          {props.message}
          <div>
          </div>
            <span>like {props.likesCount}</span>
          </div>
    </div>);
}

export default Post;