import React from 'react';
import className from 'classnames';
import './RestaurantList.css';

interface RestaurantListProps {
  restaurants: { name: string; }[]
  onSelect?: (index: number) => void;
  onMore?: () => void;
  isMore?: boolean;
  isPrev?: boolean;
  onPrev?: () => void;
}

interface RestaurantListState {
  selected: number;
}

export default class RestaurantList extends React.Component<RestaurantListProps, RestaurantListState> {

  constructor(props: RestaurantListProps) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleShowPrevious = this.handleShowPrevious.bind(this);

    this.state = {
      selected: -1,
    };
  }

  handleSelect(event: React.MouseEvent<HTMLDivElement>): void {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
    const index: number = (event.target as any).getAttribute('data-key');
    this.setState({ selected: Number(index) });
    if (this.props.onSelect) {
      this.props.onSelect(index);
    }
  }

  handleShowMore(): void {
    this.setState({
      selected: -1
    });
    if (this.props.onMore) {
      this.props.onMore();
    }
  }

  handleShowPrevious(): void {
    this.setState({
      selected: -1
    });
    if (this.props.onPrev) {
      this.props.onPrev();
    }
  }

  render(): JSX.Element {
    const listItems: JSX.Element[] = [];
    this.props.restaurants.forEach((restaurant, index) => {
      const elementClass = className(
        ['restaurant-list__item'],
        {'restaurant-list__item--selected': this.state.selected === index}
      );
      listItems.push(
        <div
          onClick={this.handleSelect}
          key={index}
          data-key={index}
          className={elementClass}
        >
          {restaurant.name}
        </div>
      );
    });

    return (
      <div className="restaurant-list">
        {this.props.isPrev && <p onClick={this.handleShowPrevious}>Show Previous</p>}
        {listItems}
        {this.props.isMore && <p onClick={this.handleShowMore}>Show More</p>}
      </div>
    );
  }
}
