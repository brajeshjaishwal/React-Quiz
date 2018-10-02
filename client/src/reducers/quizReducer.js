import actionTypes from "../actions/actionTypes";

const initialState = {
    quiz: [],
    currentQuiz: null,
    currentQuestion: null,
    user: '',
    loading: false,
    error: false,
}

function quizReducer(state = initialState, action){
        switch(action.type) {
            case actionTypes.submit_quiz:
            case actionTypes.submit_quiz_succeded:
            case actionTypes.submit_quiz_failed:
                return {...state, ...action.payload}
            case actionTypes.create_quiz:
                const currentQuiz = {
                    name: action.payload.quizname,
                    questions: [],
                    teacher: '',
                }
                return { ...state, currentQuiz }
            case actionTypes.create_question:
                const currentQuestion = {
                    question: this.aciton.payload.questionDetail,
                    answers: [],
                    correct: '',
                }
                return { ...state, currentQuestion }
            case actionTypes.create_answer:
                let { answer } = this.aciton.payload
                state.currentQuestion.answers.push(answer)
                return state
            default:
                return state
    }
}

export default quizReducer