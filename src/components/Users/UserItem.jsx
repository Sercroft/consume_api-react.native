import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import StyledText from '../Styleds/StyledText'


const UserItemHeader = ({ title, firstName, lastName, picture }) => (
    <View flexDirection='row' style={{ paddingBottom: 2}}>

        <View style={{ paddingRight: 10 }}>
            <Image style={styles.image} source={{ uri: picture }}></Image>
        </View>

        <View style={{ flex:1 }}>
            <StyledText fontWeight='bold' color='primary'>{title}</StyledText>
            <StyledText fontWeight='bold'>{firstName + lastName}</StyledText>
        </View>
    </View>
)


const UserItem = (props) => (

    <View key={props.id} style={styles.container}>
        <UserItemHeader {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    },
    image: {
        width: 68,
        height: 68,
        borderRadius: 4
    }
})

export default UserItem