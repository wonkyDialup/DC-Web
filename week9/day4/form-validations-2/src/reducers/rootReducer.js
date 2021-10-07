const initialState = {
    userName: "",
    email: "",
    address: "",
    restaurants: "",
    userData: {},

};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, userName: "USERRRRR" }
        
        case "SET_EMAIL":
            return { ...state, email: "justin@justin.com" }
        
        case "SET_STREET":
            return { ...state, address: "2374 Atlantic Ave." }
        
        case "SET_FOOD":
            return { ...state, restaurants: action.payload }
        
        case "GET_USERS":
            return { ...state, userData: action.payload }
        
        default:
            return state;
    }
}