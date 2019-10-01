import React from 'react';
import {Provider} from 'react-redux';

import configureStore from '../../store'

import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

import './App.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
