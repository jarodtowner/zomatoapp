import classNames from 'classnames';
import React from 'react';
import './Restaurant.css';

interface RestaurantProps {
  name?: string;
  address?: string;
  cuisines?: string;
  phone?: string;
  hours?: string;
  delivery?: number;
  reservation?: number;
  imageUrl?: string;
  onClick?: () => void;
}

class Restaurant extends React.Component<RestaurantProps> {

  constructor(props: RestaurantProps) {
    super(props);
  }


  render(): JSX.Element {

    const hours: JSX.Element[] = [];
    if (this.props.hours) {
      this.props.hours.split(',').forEach((time, index) => {
        const key = `hour-${index}`;
        hours.push(<p key={key}>{time}</p>);
      });
    }

    const attributes: JSX.Element[] = [];
    if (this.props.delivery !== undefined) {
      const marker = this.props.delivery ? '✓' : '✗';
      const markerClass = this.props.delivery ? 'marker marker--yes' : 'marker marker--no';
      attributes.push(<div key="delivery"><span className={markerClass}>{marker}</span> Delivery</div>);
    }      

    if (this.props.reservation !== undefined) {
      const marker = this.props.reservation ? '✓' : '✗';
      const markerClass = this.props.delivery ? 'marker marker--yes' : 'marker marker--no';
      attributes.push(<div key="reservation"><span className={markerClass}>{marker}</span> Reservations</div>);
    }

    const componentClasses = classNames(['restaurant'], {'restaurant--image': this.props.imageUrl});

    return (
      <div onClick={this.props.onClick} className={componentClasses}>
        <div onClick={this.props.onClick}>
          {this.props.imageUrl && <img src={this.props.imageUrl} />}        
        </div>
        <div onClick={this.props.onClick}>
          {this.props.name && <h1>{this.props.name}</h1>}
          <span className="light subheading">{this.props.address}</span>
          {attributes}
          {this.props.cuisines && <h2>Cuisines</h2>}
          {this.props.cuisines && <p>{this.props.cuisines}</p>}
          {this.props.phone && <h2>Phone</h2>}
          {this.props.phone && <p>{this.props.phone}</p>}
          {this.props.hours && <h2>Opening Hours</h2>}
          {this.props.hours && <p>{this.props.hours}</p>}
        </div>
      </div>
    );
  }
}

export default Restaurant;
