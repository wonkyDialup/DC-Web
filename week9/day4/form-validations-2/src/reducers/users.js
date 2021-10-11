const initialState = {
    userData: {},
};

const GetUsers = (state = initialState, action) => {
    switch (action.type) {
    
        case "GET_USERS":
            return { ...state, userData: action.payload }
        default:
            return state;
    }
};

export default GetUsers;