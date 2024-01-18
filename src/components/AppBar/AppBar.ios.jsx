import React from "react"
import { View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native'
import StyledText from "../Styleds/StyledText"
import Constants from 'expo-constants'
import theme from "../../theme"
import { Link, useLocation } from "react-router-native"

const AppBarTab = ({ children, to }) => {
    const { pathname } = useLocation()
    const active = pathname === to
    
    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return(
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollBar}>
                <AppBarTab to='/'>iOS Bar</AppBarTab>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>    
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.os,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary
    },
    scrollBar: {
        paddingBottom: 15
    }
})


export default AppBar