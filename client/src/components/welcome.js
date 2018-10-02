import React from 'react'

export const Welcome = () => {
    var user = localStorage.getItem('name')
    var message = `Welcome ${user} !!!`
    return <div><h1>{message}</h1></div>
}