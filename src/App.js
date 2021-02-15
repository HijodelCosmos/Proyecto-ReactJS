import React from 'react';
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
//Components
import {NavBar} from './components/navBar/navBar';
import './App.css';
import ItemListContainer from './components/Containers/itemListContainer';
import ItemDetailContainer from './components/Containers/itemDetailContainer';
import ItemCategoryContainer from './components/Containers/itemCategoryContainer';
import Cart from './components/cart/cart';
//Context
import { CartContextProvider } from './context/cartContext';
import { OrderContextProvider } from './context/order'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <div className="App">
        <BrowserRouter> 
          <OrderContextProvider>
            <CartContextProvider>            
              <NavBar/>
              <Redirect
                from="/Proyecto-ReactJS/"
                to="/" />
              <Switch>
                <React.Fragment>
                
                  <Route exact path='/'>
                    <ItemListContainer/>
                  </Route>  
                  <Route exact path='/category:categoryId'>
                    <ItemCategoryContainer/>
                  </Route>   
                  <Route path='/item:itemId'>
                    <ItemDetailContainer/>
                  </Route>
                  <Route path='/cart'>
                    <Cart></Cart>
                  </Route>         
                
                </React.Fragment>
              </Switch>
            
            </CartContextProvider>
          </OrderContextProvider>
        </BrowserRouter>
      </div>
  );
}
export default App;
