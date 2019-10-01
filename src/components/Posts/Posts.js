import React from 'react';
import {Row, Col} from 'react-bootstrap'

import ItemPost from './ItemPost';

const Posts = () => {
  const listPosts = Array.apply(null, Array(5)).map((item, index) => ({
    id: index,
    title: `Post header ${index+1}`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl: `./post${index+1}.png`,
    col: index <=2 ? 4 : 6
  }));

  return (
    <Row>
      {listPosts.map(item => <Col key={item.id} lg={item.col}><ItemPost post={item}/></Col>)}
    </Row>

  )
};

export default Posts;
