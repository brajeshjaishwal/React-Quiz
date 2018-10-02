import axios from 'axios'
import actionTypes from './actionTypes'

export const fetchQuizList = ({teacherId}) => {
    const url = 'http://localhost:3300/Quiz'
    const request = axios.get(url, {teacherId})
    return async dispatch => {
        dispatch(fetchQuizListStarted)
        try{
            let resp = await request
            let quizlist = resp.data
            dispatch(fetchQuizListSucceded(quizlist))
        }catch(err)
        {
            dispatch(fetchQuizListFailed(err))
        }
    }
}

export const fetchQuizListStarted = () => {
    return {
        type: actionTypes.fetch_quiz_list,
        payload: { loading: true }
    }
}
export const fetchQuizListSucceded = (quizlist) => {
    return {
        type: actionTypes.fetch_quiz_list_succeded,
        payload: { quizlist, loading: false }
    }
}
export const fetchQuizListFailed = (error) => {
    return {
        type: actionTypes.fetch_quiz_failed,
        payload: {loading: false, error: error}
    }
}

export const submitQuiz = ({quiz}) => {
    const url = 'http://localhost:3300/Quiz'
    const request = axios.post(url, {quiz})
    return async (dispatch) => {
        dispatch(submitQuizStarted())
        try{
            let resp = await request
            let data = await resp.data
            let quiz = data.quiz
            dispatch(submitQuizSucceded(quiz))
        }catch(error) {
            dispatch(submitQuizFailed(error))
        }
    }
}

export const submitQuizStarted = () => {
    return {
        type: actionTypes.submit_quiz,
        payload: { loading: true }
    }
}
export const submitQuizSucceded = (quiz) => {
    return {
        type: actionTypes.submit_quiz_succeded,
        payload: { quiz, loading: false }
    }
}
export const submitQuizFailed = (error) => {
    return {
        type: actionTypes.submit_question_failed,
        payload: {loading: false, error: error}
    }
}

export const createQuizStarted = (quizname) => {
    console.log(`in createQuizStarted: ${quizname}`)
    return {
        type: actionTypes.create_quiz,
        payload: { quizname }
    }
}

export const createQuestionStarted = (questionDetail) => {
    return {
        type: actionTypes.create_question,
        payload: { questionDetail }
    }
}

export const createAnswerStarted = (answer) => {
    return {
        type: actionTypes.create_question,
        payload: { answer }
    }
}