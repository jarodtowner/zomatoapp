import React from 'react';
import './Restaurant.css';

interface RestaurantProps {
  name: string;
  address: string;
  cuisines: string[];
  phone: string;
  attributes: { name: string, value: boolean }[];
}

class Restaurant extends React.Component<RestaurantProps> {

  constructor(props: RestaurantProps) {
    super(props);
  }


  render() {
    const attributes: JSX.Element[] = [];

    for (const attribute of this.props.attributes) {
      attributes.push(<li>{attribute.name}</li>);
    }

    return (
    <div className="restaurant">
      <div>
        <img src="https://picsum.photos/200" />
      </div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.address}</h2>
      <ul>
        {attributes}
      </ul>
    </div>
    )
  }
}

export default Restaurant;
