import studentData from "../../studentData"

const initialState = {
    students: [studentData],
    
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_STUDENTS":
            return state
        default:
            return state
    }
}

export default rootReducer;