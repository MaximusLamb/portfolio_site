import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, 
    Switch
} from "react-router-dom";
import Home from './components/Home';
import JhemmFighters from './components/JhemmFighters';
import DropZone from './components/Dropzone';
import Affirm from './components/Affirm';
import './App.css';

    export default class App extends Component {
      render() {
          return (
             
                  <Router>
                      <Switch>
                          <Route
                              path='/'
                              exact
                              render={(routerProps) => <Home {...routerProps} />}
                          />
                          <Route
                              path='/DropZone'
                              exact
                              render={(routerProps) => <DropZone {...routerProps} />}
                          />
                          <Route
                              path='/Affirm'
                              exact
                              render={(routerProps) => <Affirm {...routerProps} />}
                          />
                          <Route
                              path='/JhemmFighters'
                              exact
                              render={(routerProps) => <JhemmFighters {...routerProps} />}
                          />
                      </Switch>
                  </Router>
            
          )
      }
  }

