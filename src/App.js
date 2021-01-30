import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import {NavBar} from './components/navBar/navBar'
import './App.css';
import ItemListContainer from './components/itemContainer/itemListContainer';
import ItemDetailContainer from './components/itemContainer/itemDetailContainer'
//Context
import { CartContext } from './context/cartContext'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (

      <div className="App">
        <BrowserRouter> 
          <CartContext.Provider value={0}>
          <NavBar/>
          <Switch>
            <React.Fragment>
            <main className="container">
              <Route exact path='/Proyecto-ReactJS/'>
                <ItemListContainer/>
              </Route>  
              <Route exact path='/category:categoryId'>
                <ItemListContainer/>
              </Route>   
              <Route path='/item:itemId'>
                <ItemDetailContainer/>
              </Route>         
            </main>
            </React.Fragment>
          </Switch>
          </CartContext.Provider>
        </BrowserRouter>
      </div>
  );
}
export default App;
