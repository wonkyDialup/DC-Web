const initialState = {
    mustang: "1967 BOSS 302",
    fordGt: "2021 Ford GT",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "2020 ZRX 1200",
    justin: "Justin",
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BUGATTI":
            return state.bugatti;
        
        case "GET_FORDGT":
            return state.fordGt;
        
        case "CHANGE_KAWASAKI":
            return {...state, kawasaki: "Ninja 250"};
        
        case "GET_MUSTANG":
            return state.mustang;
        
        case "GET_JUSTIN":
            return state.justin;
    
        default:
            return state
    }
};

export default rootReducer;