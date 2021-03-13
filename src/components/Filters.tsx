import React from 'react';
import Checkbox from './Checkbox';
import './Filters.css';

interface FiltersProps {
  categories: string[];
  cuisines: string[]
}

interface FiltersState {
  activeCategories: string[];
  activeCuisines: string[];
}

export default class Filters extends React.Component<FiltersProps, FiltersState> {

  state = {
    activeCategories: [],
    activeCuisines: []
  }

  constructor(props: FiltersProps) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(label: string, value: boolean): void {
    let active: string[] = JSON.parse(JSON.stringify(this.state.activeCategories));
    if (value) {
      active.push(label);
    } else {
      active = active.filter((el: string) => el !== label);
    }
    this.setState({activeCategories: active}, () => console.log(this.state.activeCategories));
  }

  render(): JSX.Element {

    const categories: JSX.Element[] = [];
    for (const filter of this.props.categories) {
      categories.push(<Checkbox onToggle={this.handleToggle} id={filter} label={filter}></Checkbox>);
    }

    const cuisines: JSX.Element[] = [];
    for (const cuisine of this.props.cuisines) {
      cuisines.push(<Checkbox onToggle={this.handleToggle} id={cuisine} label={cuisine}></Checkbox>);
    }

    return (
      <div className="filters">
        <div className="filters__categories">
          <h1>Categories</h1>
          {categories}
        </div>
        <div className="filters__categories">
          <h1>Cuisines</h1>
          {cuisines}
        </div>
      </div>
    );
  }

}
