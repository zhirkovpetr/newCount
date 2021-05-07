import {combineReducers, createStore} from 'redux'
import {counterReducer} from "./counter-reducer";


export type AppStateType = ReturnType<typeof rootReducer> //типизация стейта всего приложения

let rootReducer = combineReducers({
    counter: counterReducer
});

export type AppStoreType = typeof store

let preloadedState;
const persistedTodoString= localStorage.getItem('app-state')
if(persistedTodoString){
    preloadedState= JSON.parse(persistedTodoString)
}

export let store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem('app-state', JSON.stringify(store.getState()))
})