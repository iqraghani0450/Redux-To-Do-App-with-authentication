import React from 'react';
import Navigation from './navigation/Navigation'
import { createStore } from "redux";
import { Provider } from 'react-redux';
import allReducers from './redux/reducers/allReducers'

const App = () => {

    const store = createStore(
        allReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );
// console.log(store?.getState(), 'my store')
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};


export default App;