import {AnyAction, applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {ThunkAction} from 'redux-thunk';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    auth: authReducer,
});
export type RootStateType = ReturnType<typeof store.getState>
export type ReduxStore = typeof store

const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, unknown, RootStateType, AnyAction>;

export default store;