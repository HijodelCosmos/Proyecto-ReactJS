import React from 'react';
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
        <NavBar/>
        <main className="container">
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
      </div>
  );
}
export default App;
