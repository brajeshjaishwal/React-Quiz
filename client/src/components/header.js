import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { NavLink } from 'react-router-dom'

const noAuthHeader = 
    <div className="ui three item menu">
        <NavLink className="item" activeClassName="active" exact to = "/">Home</NavLink>
        <NavLink className="item" activeClassName="active" exact to = "/Login" >Login</NavLink>
        <NavLink className="item" activeClassName="active" exact to = "/Register" >Register</NavLink>
    </div>

const authTeacherHeader =  
    <div className="ui three item menu">
        <NavLink className="item" activeClassName="active" exact to = "/">Home</NavLink>
        <NavLink className="item" activeClassName="active" exact to = "/Quiz/Create" >Create Quiz</NavLink>
        <NavLink className="item" activeClassName="active" exact to = "/Quiz" >Quiz list</NavLink>
    </div>

const authStudentHeader =  
    <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to = "/">Home</NavLink>
        <NavLink className="item" activeClassName="active" exact to = "/Quiz" >Quiz List</NavLink>
    </div>

const AppHeader = () => {
    var user = localStorage.getItem('name')
    var role = localStorage.getItem('role')
    console.log(`in app header-${user}-${role}`)
    return user ? (role === 'teacher' ? authTeacherHeader : authStudentHeader) : noAuthHeader
}

export default AppHeader