

import { createStore } from "redux";
import cakeReducer from './Cake/cakeReducer'



const store = createStore(cakeReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;