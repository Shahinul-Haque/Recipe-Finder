import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecepiItem from './RecepiItem';
import {Link} from 'react-router-dom';

class FavoriteRecipeList extends Component {
  render() {
    return (
        
        <div>
        <h4><Link to='/'>Home</Link></h4>
            <h4> Favorite Recipes : </h4>
                {this.props.favoriteRecipes.map((recipe, index) => {
                    return (
                        <RecepiItem 
                        key={index} 
                        recipe={recipe} 
                        favoriteButton={false}    
                        />
                    )
                })}
            
        </div>
      
    )
  }
}
function mapStateToProps(state){
    return{
    favoriteRecipes:state.favoriteRecipes
    }
}
export default connect(mapStateToProps,null)(FavoriteRecipeList);
