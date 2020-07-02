import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Component/redux/store';
import './App.css';
import Home from './Component/Route/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;