import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
// compose enhancer
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(reducers, 
      composeEnhancers(applyMiddleware(thunk)));
    
export default store;