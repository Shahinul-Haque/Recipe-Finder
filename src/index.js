import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import FavoriteRecipeList from './components/FavoriteRecipeList';

const store = createStore(rootReducer);
//store.subscribe(()=>console.log('store', store.getState()));
ReactDOM.render(
    <Provider store = { store }>
     <BrowserRouter>
         <Switch>
             <Route exact path='/' component={App} />
                 
             <Route path='/favorites' component={FavoriteRecipeList} />
         </Switch>
     </BrowserRouter>
       </Provider>, document.getElementById('root'));