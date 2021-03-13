import React from 'react';
import './Restaurant.css';

interface RestaurantProps {
  name?: string;
  address?: string;
  cuisines?: string[];
  phone?: string;
  attributes?: { name: string, value: boolean }[];
}

class Restaurant extends React.Component<RestaurantProps> {

  constructor(props: RestaurantProps) {
    super(props);
  }


  render(): JSX.Element {
    const attributes: JSX.Element[] = [];

    if (this.props.attributes) {
      for (const attribute of this.props.attributes) {
        attributes.push(<li>{attribute.name}</li>);
      }
    }

    return (
      <div className="restaurant">
        {this.props.name && <h1>{this.props.name}</h1>}
        <h2>{this.props.address}</h2>
        {this.props.phone && <h2>Phone</h2>}
        {this.props.phone && <p>{this.props.phone}</p>}
        <ul>
          {attributes}
        </ul>
      </div>
    );
  }
}

export default Restaurant;
