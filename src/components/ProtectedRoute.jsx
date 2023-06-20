import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth()

    // Redirect to home if user is not logged in

    if (!user) {
        return (<Navigate to='/' />)
    } else {
        return children
    }
}

export default ProtectedRoute