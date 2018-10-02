import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import { Welcome } from './components/welcome';
import AppHeader from './components/header'
import LoginComponent from './components/login'
import RegisterComponent from './components/register';
import CreateQuizComponent from './components/createquiz';
import {Redirect} from 'react-router-dom'
import CreateQuestionComponent from './components/createQuestion';

const PrivateRoute = ({isAuth, ...rest}) => {
  return isAuth ? <Route {...rest} /> : <Redirect to='/Login' /> 
}

class App extends Component {
  render() {
    let user = localStorage.getItem('name')
    let isAuth = false
    if(user) isAuth = true
    return (
      <BrowserRouter>
        <Container>
          <AppHeader/>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/Login" component={LoginComponent}/>
          <Route exact path="/Register" component={RegisterComponent}/>
          <PrivateRoute path='/Quiz/:quizname/Question/:qno/Create' isAuth={isAuth} component={CreateQuestionComponent}/>
          <PrivateRoute path="/Quiz/Create" isAuth={isAuth} component={CreateQuizComponent} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
