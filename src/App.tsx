import * as React from 'react';
import './App.css';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
        <div className="filters"></div>
        <div className="results"></div>
        <Restaurant
          name="Some Restaurant"
          address="1 Some Street, Adelaide"
        />
    </div>
  );
}

export default App;
