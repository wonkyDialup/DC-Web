import { combineReducers } from "redux";
import Counter from "./counter";
import SignUpFormData from "./signUpForm";


// const initialState = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     matchups: [],
//     currentLiveMatch: {},
//     newsArticles: [],
//     previousMatchVideos: [],
//     userData: [],
// };

const rootReducer = combineReducers({
    SignUpFormData,
    Counter,
    // switch (action.type) {
        // case "SIGNUPUSER_FIRSTNAME":
        //     return { ...state, firstName: action.payload };
        // case "SIGNUPUSER_LASTNAME":
        //     return { ...state, lastName: action.payload };
        // case "SIGNUPUSER_EMAIL":
        //     return { ...state, email: action.payload };
        // case "SIGNUPUSER_PASSWORD":
        //     return { ...state, password: action.payload };
        // default:
        //     return state
})
export default rootReducer;