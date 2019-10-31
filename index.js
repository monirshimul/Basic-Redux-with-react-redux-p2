const redux = require("redux");

const cerateStore = redux.createStore;
const combineReducers = redux.combineReducers;










// This is the Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Action Creator
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 2
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        payload: 1
    }
}

//this is the initialstate
const initialCakeState = {
    numOfCake: 10

}

const initialIceCreamState = {
    numOfIceCreams: 20
}

//this is the reducer

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case "BUY_CAKE": return {
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
        default: return state

    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case "BUY_ICECREAM": return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }
        default: return state
    }
}

//combine Reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


//this is Store,,
const store = cerateStore(rootReducer)
console.log("Initial State :", store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state :", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
store.dispatch(buyCake());
store.dispatch(buyCake());

