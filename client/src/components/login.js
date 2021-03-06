import React, {Component} from 'react'
import {Form, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {bindActionCreators} from 'redux'
import { loginUser } from '../actions/authActions';
import { connect } from 'react-redux'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            userType: 'student',
            options: [
                { key: 'student', text: 'student', value: 'student' },
                { key: 'teacher', text: 'teacher', value: 'teacher' },]
        }
    }

    onChangeHandler = ({name, value}) => {
        this.setState({[name]: value})
    }

    onSubmitHandler = async (event) => {
        event.preventDefault()
        console.log(this.state.name)
        if(!this.state.name || !this.state.userType)
        {
            alert('please enter required values.')
        }
        
        await this.props.loginUser({name: this.state.name, userType: this.state.userType})

        let name = localStorage.getItem('name')
        let role = localStorage.getItem('role')
        if(name && role)
            this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Form className="ui form" onSubmit = {this.onSubmitHandler}>
                    <Form.Input onChange={e => this.onChangeHandler({name:"name", value:e.target.value})} placeholder='Enter your name'/>
                    <Form.Select options={this.state.options} defaultValue= 'student' onChange={e=>this.onChangeHandler({name:"userType", value:e.target.textContent})} />
                    <Button>Login</Button>
                </Form>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        loginUser: bindActionCreators(loginUser, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(LoginComponent)