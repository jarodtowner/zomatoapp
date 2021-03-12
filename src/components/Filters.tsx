import React from 'react';
import Checkbox from './Checkbox';
import './Filters.css';

interface FiltersProps {
  filters: string[];
}

interface FiltersState {
  activeFilters: string[];
}

export default class Filters extends React.Component<FiltersProps, FiltersState> {

  state = {
    activeFilters: []
  }

  constructor(props: FiltersProps) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(label: string, value: boolean): void {
    let active: string[] = JSON.parse(JSON.stringify(this.state.activeFilters));
    if (value) {
      active.push(label);
    } else {
      active = active.filter((el: string) => el !== label);
    }
    this.setState({activeFilters: active}, () => console.log(this.state.activeFilters));
  }

  render(): JSX.Element {

    const items: JSX.Element[] = [];
    for (const filter of this.props.filters) {
      items.push(<Checkbox onToggle={this.handleToggle} id={filter} label={filter}></Checkbox>);
    }

    return (
      <div className="filters">
        {items}
      </div>
    );
  }

}
