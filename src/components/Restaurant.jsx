import * as React from 'react';
import './Restaurant.css';

function Restaurant(props) {
  /* eslint-disable */
  const name = props.name;

  return (
    <div className="restaurant">
      <div>
        <img src="https://picsum.photos/200" />
      </div>
      <h1>{name}</h1>
    </div>
  )
}

export default Restaurant;
