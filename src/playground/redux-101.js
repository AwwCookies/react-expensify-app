import {createStore} from "redux"

const incrementCount = (by = 1) => {
    return {
        type: "INCREMENT",
        incrementBy: typeof by === "number" ? by : 1
    }
};

const decrementCount = (by = 1) => {
    return {
        type: "DECREMENT",
        decrementBy: typeof by === "number" ? by : 1
    }
};

const setCount = (count = 0) => {
  return {
      type: "SET",
      count: count
  }
};

const resetCount = () => {
    return {
        type: "RESET"
    }
};

const countReducer = ((state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
});

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: action.count
            };
        case "RESET":
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsub = store.subscribe(() => {
    console.log("Caught: ", store.getState());
});

// I'd like to increment the count
console.log(store.getState());

store.dispatch(incrementCount());
store.dispatch(incrementCount(5));
store.dispatch(resetCount());
store.dispatch(setCount(9));
store.dispatch(decrementCount());

console.log(store.getState());

