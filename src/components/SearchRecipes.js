import React, { Component } from 'react';
import { Form,FormGroup, FormControl,ControlLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

 class SearchRecipes extends Component {
  
    constructor(){
        super()
        this.state ={
            ingrdients:'',
            dish: '' 
        }
    }
    search(){
        let { ingrdients , dish} = this.state;
        const url = `http://www.recipepuppy.com/api/?i=${ingrdients}&q=${dish}`;
        fetch(url, {
            method:'GET'
        }).then(response => response.json())
           .then(json =>this.props.setRecipes(json.results));
    }

  render() {
    return (
      <div>
        <Form inline>
            <FormGroup>
               <ControlLabel>Ingrdients</ControlLabel>
               { ' ' }
               <FormControl type='text' 
               placeholder='garlic,chicken'
               onChange={ event =>this.setState({ ingrdients:event.target.value }) }
                />
            </FormGroup>
            { ' '}
            <FormGroup>
                <ControlLabel>Dish</ControlLabel>
                { ' ' }
                <FormControl  type='text'
                 placeholder='adobe'
                 onChange={event => this.setState({dish:event.target.value })}
                  />
            </FormGroup>
            { ' ' }
            <Button onClick={()=> this.search()} >Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, {setRecipes})(SearchRecipes);
