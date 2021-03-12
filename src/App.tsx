import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Restaurant from './components/Restaurant';
import API from './util/API';

interface AppState {
  filters: string[];
}

export default class App extends React.Component<unknown, AppState> {

  state = { filters: [] };

  constructor() {
    super({});
    this.setState({ filters: [] });
    const api = new API('');
    api.get('https://developers.zomato.com/api/v2.1/categories')
      .then(res => {
        this.setState({filters: res.categories.map((el: { categories: { id: number; name: string }}) => el.categories.name)});
      });
  }

  render(): JSX.Element {

    const { filters } = this.state;

    return (
      <div className="App">
        <Filters filters={filters}></Filters>
        <div className="results"></div>
        <Restaurant
          name="Some Restaurant"
          address="1 Some Street, Adelaide"
        />
      </div>
    );
  }
}
