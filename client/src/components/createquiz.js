import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Form } from 'semantic-ui-react';
import { createQuizStarted } from '../actions/quizActions';

class CreateQuizComponent extends Component {
    state = {
        quizname: '',
    }

    onChangeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onAddQuiz = async () => {
        await this.props.addQuiz(this.state.quizname)
        this.props.history.push(`/Quiz/${this.state.quizname}/Question/1/Create`)
    }

    render() {
        return(
            <Form onSubmit={this.onAddQuiz}>
                <h3>Add Quiz</h3>
                <Form.Input name='quizname' type='text' placeholder='Enter quiz name' onChange={e => this.onChangeHandler(e)}/>
                <Form.Button type='submit'>Create Quiz</Form.Button>
            </Form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addQuiz: bindActionCreators(createQuizStarted, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(CreateQuizComponent)