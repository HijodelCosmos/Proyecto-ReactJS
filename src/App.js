import React from 'react';
//Components
import {NavBar} from './components/navBar/navBar'
import './App.css';
import ItemListContainer from './components/itemListContainer/itemListContainer';
//Styles
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (

      <div className="App">
        <NavBar/>
        <main className="container">
            <ItemListContainer/>
        </main>
      </div>
  );
}
export default App;
