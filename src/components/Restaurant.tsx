import * as React from 'react';
import './Restaurant.css';

interface RestaurantProps {
  name: string;
}

class Restaurant extends React.Component<RestaurantProps> {

  constructor(props: RestaurantProps) {
    super(props);
  }

  render() {
    return (
    <div className="restaurant">
      <div>
        <img src="https://picsum.photos/200" />
      </div>
      <h1>{this.props.name}</h1>
    </div>
    )
  }
}

export default Restaurant;
