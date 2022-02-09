import studentData from "../../studentData"

const initialState = {
    students: studentData,
    counter: 0,
    
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_STUDENTS":
            return state
        default:
            return state
        case "THE_COUNTER":
            return {...state,counter: state.counter + action.payload}
    }
}

export default rootReducer;