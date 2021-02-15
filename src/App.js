import React from 'react';
import { BrowserRouter, Switch, Route , Redirect } from "react-router-dom";
//Components
import {NavBar} from './components/navBar/navBar';
import './App.css';
import ItemListContainer from './components/Containers/itemListContainer';
import ItemDetailContainer from './components/Containers/itemDetailContainer';
import ItemCategoryContainer from './components/Containers/itemCategoryContainer';
import Cart from './components/cart/Cart';
import Orders from './components/orders/Orders'
//Context
import { CartContextProvider } from './context/cartContext';
import { OrderContextProvider } from './context/orderContext'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

      <div className="App">
        <BrowserRouter> 
          <CartContextProvider>
            <OrderContextProvider>
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
                  <Route path='/Orders'>
                    <Orders></Orders>
                  </Route>  

                </React.Fragment>
              </Switch>
            </OrderContextProvider>
          </CartContextProvider>
        </BrowserRouter>
      </div>
  );
}
export default App;
