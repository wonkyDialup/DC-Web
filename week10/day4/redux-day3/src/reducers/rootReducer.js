const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGNUPUSER_FIRSTNAME":
            return { ...state, firstName: action.payload };
        case "SIGNUPUSER_LASTNAME":
            return { ...state, lastName: action.payload };
        case "SIGNUPUSER_EMAIL":
            return { ...state, email: action.payload };
        case "SIGNUPUSER_PASSWORD":
            return { ...state, password: action.payload };
        default:
            return state
    }
 }
export default rootReducer