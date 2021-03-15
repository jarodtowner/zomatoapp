import classNames from 'classnames';
import React from 'react';
import {Category, Cuisine} from '../App';
import Checkbox from './Checkbox';
import './Filters.css';

interface FiltersProps {
  categories: Category[];
  cuisines: Cuisine[]
  onChange?: (category?: number, cuisine?: number) => void;
  onMenuActivate: () => void;
}

interface FiltersState {
  activeCategory: number;
  activeCuisine: number;
  expanded: boolean;
}

export default class Filters extends React.Component<FiltersProps, FiltersState> {

  state = {
    activeCategory: -1,
    activeCuisine: -1,
    expanded: false
  }

  constructor(props: FiltersProps) {
    super(props);
    this.handleCategoryToggle = this.handleCategoryToggle.bind(this);
    this.handleCuisineToggle = this.handleCuisineToggle.bind(this);
    this.handleFiltersActivate = this.handleFiltersActivate.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleFiltersActivate(): void {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleCategoryToggle(label: string): void {
    this.setState({
      activeCategory: (this.props.categories.find(category => category.categories.name === label)?.categories.id as number),
      activeCuisine: -1
    }, () => {
      if (this.props.onChange) {
        const category = this.state.activeCategory === -1 ? undefined : this.state.activeCategory;
        this.props.onChange(category, undefined);
      }
    });
  }
  handleMenuClick(): void {
    if (this.props.onMenuActivate) {
      this.props.onMenuActivate();
    }
  }

  handleCuisineToggle(label: string): void {
    this.setState({
      activeCuisine: (this.props.cuisines.find(cuisine => cuisine.cuisine.cuisine_name === label)?.cuisine.cuisine_id as number),
      activeCategory: -1
    }, () => {
      if (this.props.onChange) {
        const cuisine = this.state.activeCuisine === -1 ? undefined : this.state.activeCuisine;
        this.props.onChange(undefined, cuisine);
      }
    });
  }

  render(): JSX.Element {

    const categories: JSX.Element[] = [];
    for (const category of this.props.categories) {
      const isSelected = this.state.activeCategory === category.categories.id;

      categories.push(<Checkbox onToggle={this.handleCategoryToggle} value={isSelected} id={category.categories.name} label={category.categories.name}></Checkbox>);
    }

    const cuisines: JSX.Element[] = [];
    for (const cuisine of this.props.cuisines) {
      const isSelected = this.state.activeCuisine === cuisine.cuisine.cuisine_id;

      cuisines.push(<Checkbox value={isSelected} onToggle={this.handleCuisineToggle} id={cuisine.cuisine.cuisine_name} label={cuisine.cuisine.cuisine_name}></Checkbox>);
    }

    const componentClasses = classNames(
      ['filters'],
      { 'filters--active': this.state.expanded }
    );

    return (
      <div className={componentClasses}>
        <div className="filters__section">
          <h1>Categories</h1>
          <div className="filters__options">
            {categories}
          </div>
        </div>
        <div className="filters__section">
          <h1>Cuisines</h1>
          <div className="filters__options">
            {cuisines}
          </div>
        </div>
        <p  className="filters__button">
          <div onClick={this.handleMenuClick} className="filters__menu-button"></div>
          <span onClick={this.handleFiltersActivate}>
          Filters
          </span>
        </p>
      </div>
    );
  }
}
