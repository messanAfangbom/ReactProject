import { createStore } from 'redux';
import listAnnonce from '../reducers/annoncesReducer';
import login from '../reducers/loginReducer';

export default createStore(listAnnonce, login)