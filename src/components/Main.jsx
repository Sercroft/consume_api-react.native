import React from 'react'
import { View } from 'react-native'
import UserList from './Users/UserList'
import AppBar from './AppBar/AppBar'
import { Routes, Route } from 'react-router-native'

const Main = () => {
    return(
        <View>
            <AppBar/>

            <Routes>
                <Route path='/' element={<UserList/>}></Route>
            </Routes>
        </View>
    )
}

export default Main