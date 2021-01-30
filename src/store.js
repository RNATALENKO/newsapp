import {createStore, combineReducers, applyMiddleware} from 'redux';
//import {applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

//thunk not importing correctly
//import thunk from 'redux-thunk', renamed it to reduxThunk I think;

import {composeWithDevTools} from 'redux-devtools-extension';
import {newsReducer} from './Reducers/reducers.js';


const reducers = combineReducers({
    newsReducer
})

const Store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));
export default Store; 




