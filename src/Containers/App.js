import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Store from '../store/configureStore'
import Main from './Main.tsx'

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
