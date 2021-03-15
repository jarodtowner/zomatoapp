import React from 'react';
import className from 'classnames';
import './RestaurantList.css';

interface RestaurantListProps {
  restaurants: { name: string; }[]
  page: number;
  onSelect?: (index: number) => void;
  onMore?: () => void;
  isMore?: boolean;
  isPrev?: boolean;
  onPrev?: () => void;
  isActive: boolean;
}

interface RestaurantListState {
  selected: number;
  selectedPage: number;
}

export default class RestaurantList extends React.Component<RestaurantListProps, RestaurantListState> {

  constructor(props: RestaurantListProps) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
    this.handleShowPrevious = this.handleShowPrevious.bind(this);
    this.selectRestaurant = this.selectRestaurant.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handlePreviousKeyDown = this.handlePreviousKeyDown.bind(this);
    this.handleMoreKeyDown = this.handleMoreKeyDown.bind(this);

    this.state = {
      selected: -1,
      selectedPage: -1
    };
  }

  handleSelect(event: React.MouseEvent<HTMLDivElement>): void {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
    const index: number = (event.target as any).getAttribute('data-key');
    this.selectRestaurant(Number(index));
  }

  handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter') {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */ 
      const index: number = (event.target as any).getAttribute('data-key');
      this.selectRestaurant(Number(index));
    }
  }

  selectRestaurant(index: number): void {
    this.setState({
      selected: index,
      selectedPage: this.props.page
    });
    if (this.props.onSelect) {
      this.props.onSelect(index);
    }
  }

  handleShowMore(): void {
    if (this.props.onMore) {
      this.props.onMore();
    }
  }

  handleShowPrevious(): void {
    if (this.props.onPrev) {
      this.props.onPrev();
    }
  }

  handlePreviousKeyDown({key}: { key: string }): void {
    if (key === 'Enter') {
      this.handleShowPrevious();
    }
  }

  handleMoreKeyDown({key}: { key: string }): void {
    if (key === 'Enter') {
      this.handleShowMore();
    }
  }


  render(): JSX.Element {
    const listItems: JSX.Element[] = [];
    this.props.restaurants.forEach((restaurant, index) => {
      const elementClass = className(
        ['restaurant-list__item'],
        {'restaurant-list__item--selected': this.state.selected === index && this.state.selectedPage === this.props.page}
      );
      listItems.push(
        <div
          onKeyDown={this.handleKeyDown}
          tabIndex={0}
          onClick={this.handleSelect}
          key={index}
          data-key={index}
          className={elementClass}
        >
          {restaurant.name}
        </div>
      );
    });

    const componentClass = className(
      ['restaurant-list'],
      { 'restaurant-list--active': this.props.isActive }
    );

    console.log(this.props.isActive);

    return (
      <div className={componentClass}>
        {this.props.isPrev && <p
          tabIndex={0}
          className="nav-button"
          onKeyDown={this.handlePreviousKeyDown}
          onClick={this.handleShowPrevious}
        >See Previous</p>}
        {listItems}
        {this.props.isMore && <p
          tabIndex={0}
          className="nav-button"
          onKeyDown={this.handleMoreKeyDown}
          onClick={this.handleShowMore}
        >See More</p>}
      </div>
    );
  }
}
