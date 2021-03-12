import React from 'react';

interface FiltersProps {
  filters: string[];
}

export default class Filters extends React.Component<FiltersProps> {

  constructor(props: FiltersProps) {
    super(props);
  }

  render(): JSX.Element {

    const items: JSX.Element[] = [];
    for (const filter of this.props.filters) {
      items.push(<li>{filter}</li>);
    }

    return (
      <div className="filters">
        {items}
      </div>
    );
  }

}
