import React, { Component } from 'react'
import Main from './Main.tsx'
import { Provider } from 'react-redux'
import Store from '../store/configureStore'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
