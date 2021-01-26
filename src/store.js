import {createStore, combineReducers, applyMiddleware} from 'redux';
//import {applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

//thunk not importing
//import thunk from 'redux-thunk';


import {composeWithDevTools} from 'redux-devtools-extension';
import newsReducer from './Reducers/reducers.js';


const reducers = combineReducers({
    newsReducer:newsReducer
})


const Store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));


export default Store; 




