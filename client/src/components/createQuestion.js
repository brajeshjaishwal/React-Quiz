import React, {Component} from 'react'
import {connect} from 'react-redux' 
import { Form, Divider, Radio, Label} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { createQuestionStarted, createAnswerStarted } from '../actions/quizActions';

class CreateQuestionComponent extends Component {
    state = {
        quizname: this.props.match.params.quizname,
        newQuestion: '',
        question: null,
        answers: [],
        newanswer: '',
        correct: 0,
    }

    onSubmitHandler = (event) => {
        event.preventDefault()
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onAddAnswer = async () => {
        let tempAnswer = this.state.newanswer
        this.setState({newanswer: ''})
        await this.state.answers.push(tempAnswer)
        this.forceUpdate()
    }

    onAddQuestion = async () => {
        let tempQuestion = this.state.newQuestion
        await this.setState({question: tempQuestion})
    }

    onCorrectAnswer = () => {

    }

    render() {
        let { quizname } = this.props.match.params
        let { question, answers, newanswer } = this.state
        console.log(`in create question :${question}: ${answers}`)
        if(quizname === undefined || quizname === null)
        {
            return <div>Loading...</div> 
        }
        return  (
                    <Form onSubmit={this.onSubmitHandler}>
                        <h2>{quizname}</h2>
                        <div style={{marginBottom:'2em'}}>
                        {
                            question ?
                            <Label>{ question }</Label> : 
                            <Form.Input name="newQuestion" placeholder='Enter your question here.' onChange={e => this.onChangeHandler(e)} ></Form.Input>
                        }
                        </div>
                        <Form.Group name="correct"
                                    value={this.state.correct}
                                    onChange={this.onChangeHandler}>
                            { 
                                answers.map((ans, index) => <Form.Radio slider
                                                                    key={index}                            
                                                                    label={ans}
                                                                    name='correct'
                                                                    value={index}
                                                                    checked={this.state.correct === index}
                                                                    onChange={this.onChangeHandler} />
                                                            )
                            }
                        </Form.Group>
                        <Divider horizontal></Divider>
                        <Form.Group>
                            {
                                question === null ?
                                    <Form.Button onClick={this.onAddQuestion}>Add Question</Form.Button> :
                                    <Form.Group>
                                        <Form.Input name="newanswer" 
                                            placeholder='Enter your answer here.' 
                                            onChange={e => this.onChangeHandler(e)} content={newanswer}/>
                                        <Form.Button onClick={this.onAddAnswer}>Add Answer</Form.Button>
                                    </Form.Group>                                   
                            }
                        <Form.Button type='submit'>Accept</Form.Button>
                        </Form.Group>
                        <Label color='red'>Before submitting, please select a correct answer.!!!</Label>
                        
                    </Form>
                )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createQuestion: bindActionCreators(createQuestionStarted, dispatch),
        addAnswer: bindActionCreators(createAnswerStarted, dispatch)
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        quiz: state.currentQuiz,
        currentQuestion: state.currentQuestion,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionComponent)