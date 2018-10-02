import React, { Component } from 'react'
import { connect }from 'react-redux'
import { bindActionCreators } from 'redux';
import CreateQuestionComponent from './createQuestion';
import { fetchQuizList } from '../actions/quizActions';

class QuizList extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div>Quiz list.</div>
                <ul>
                {
                    this.state.questions.map((q, index) => <CreateQuestionComponent key={index}/>)
                }
                </ul>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuiz: bindActionCreators(fetchQuizList)
    }
}

export default QuizList