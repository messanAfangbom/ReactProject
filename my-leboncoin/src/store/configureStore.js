import { combineReducers, createStore } from 'redux';
import listAnnonce from '../reducers/annoncesReducer';
import login from '../reducers/loginReducer';
import favoriteAnnonce from '../reducers/favoriteReducer';

 export default combineReducers({listAnnonce, login, favoriteAnnonce});