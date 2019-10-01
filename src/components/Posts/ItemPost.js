import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../assets/img/icon.svg';

import './style.scss';

const ItemPost = (props) => {
  const {title, description, imgUrl} = props.post;
  return (
    <div className="post post__item">
      <img className="post__image" src={imgUrl} alt="title"/>
      <div className="post__content">
        <div className="post__title">
          {title}
          <img className="post__icon" src={Icon} alt="Icon"/>
        </div>
        <div className="post__description">{description}</div>
      </div>
    </div>
  )
};

ItemPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    imgUrl: PropTypes.string,
    col: PropTypes.number,
  })
};

export default ItemPost;
