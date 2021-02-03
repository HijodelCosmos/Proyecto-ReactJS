import React from 'react';
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
//Components
import {NavBar} from './components/navBar/navBar'
import './App.css';
import ItemListContainer from './components/itemContainer/itemListContainer';
import ItemDetailContainer from './components/itemContainer/itemDetailContainer'
//Context
import { CartContextProvider } from './context/cartContext'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <div className="App">
        <BrowserRouter> 
          <CartContextProvider>
          <NavBar/>
          <Redirect
            from="/Proyecto-ReactJS/"
            to="/" />
          <Switch>
            <React.Fragment>
            <main className="container">
              <Route exact path='/'>
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
          </CartContextProvider>
        </BrowserRouter>
      </div>
  );
}
export default App;
