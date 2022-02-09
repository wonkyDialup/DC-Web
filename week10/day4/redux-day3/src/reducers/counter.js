import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../action-types/countertypes";
const initialState = 0;

const Counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
};

export default Counter;