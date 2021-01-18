import React,{Component} from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import BodyIndex from './Pages/BodyIndex';
import Ppn from './Pages/Ppn';
import Bank from './Pages/Bank';
import NavBar from './Components/NavBar';
class App extends Component {
  render() {
    return (
      <div className="App-container">
      <NavBar />
      <Switch>
      <Route exact path="/BodyIndex" component={BodyIndex} />
      <Route path="/Bank" component={Bank} />
      <Route path="/Ppn" component={Ppn} />
      </Switch>
      </div>
    );
  }
}
export default App;
