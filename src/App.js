import React, { Component } from 'react';
import router from './router'
import {HashRouter} from 'react-router-dom'
import './App.css';
import {Provider} from 'react-redux'
import store from './ducks/store'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
          <div><Header/></div>
            {router}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
