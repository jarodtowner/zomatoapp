import * as React from 'react';
import './Restaurant.css';

class Restaurant extends React.Component<{ name: string; }> {

  name: string;

  constructor(props: { name: string }) {
    super(props);
    this.name = props.name;
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
