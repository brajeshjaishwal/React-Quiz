import actionTypes from "../actions/actionTypes";

//states
const initialState = {
    quiz: [],
    currentQuiz: null,
    currentQuestion: null,
    user: '',
    loading: false,
    error: false,
}

function autheReducer(state = initialState, action){
        switch(action.type) {
            case actionTypes.login:
            case actionTypes.login_success:
            case actionTypes.login_failed:
            case actionTypes.register:
            case actionTypes.register_failed:
            case actionTypes.register_success:
                return {...state, ...action.payload}
            default:
                return state
    }
}

export default autheReducer