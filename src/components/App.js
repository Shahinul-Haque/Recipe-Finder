import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes';
import '../styles/index.css';
import RecepiList from './RecepiList';



 class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>
        <SearchRecipes />
        <RecepiList/>
      </div>
    )
  }
}
export default App;
