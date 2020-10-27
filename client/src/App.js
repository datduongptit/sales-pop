import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Header from './components/header/Header'
import Navbar from './components/header/Navbar';
import Views from './components/contents/Views'; 
import store from './store';
import Alert from './components/Alert';
function App() {
  return (
      <Provider store={store}>
          {/* <Alert /> */}
          <Header />
          <Navbar />
          <Views />
      </Provider>
  );
}

export default App;
