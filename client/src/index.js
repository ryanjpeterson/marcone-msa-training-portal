import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DataLayer } from './context/DataLayer';
import reducer, { initialState } from './context/reducer';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <DataLayer initialState={initialState} reducer={reducer}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataLayer>
  </BrowserRouter>,
  document.getElementById('root')
);
