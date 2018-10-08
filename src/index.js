import React    from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';


import App from './components/App';
import rootReducer from './reducers/root_reducer';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk,ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
