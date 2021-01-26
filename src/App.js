import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
//Components
import {NavBar} from './components/navBar/navBar'
import './App.css';
import ItemListContainer from './components/itemContainer/itemListContainer';
import ItemDetailContainer from './components/itemContainer/itemDetailContainer'
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (

      <div className="App">
        <BrowserRouter> 
          <NavBar/>
          <Switch>
            <React.Fragment>
            <main className="container">
              <Route exact path='/'>
                <ItemListContainer/>
              </Route>  
              <Route path='/item:itemId'>
                <ItemDetailContainer/>
              </Route>         
            </main>
            </React.Fragment>
          </Switch>
        </BrowserRouter>
      </div>
  );
}
export default App;
