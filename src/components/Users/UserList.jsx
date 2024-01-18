import React from "react"
import { Text, FlatList, StyleSheet } from 'react-native'
import UserItem from './UserItem'
import useUsers from '../../hooks/useUsers'

const UserList = () => {
    const { users } = useUsers()

    return(  
        <FlatList style={styles.container}
            data={users}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={ ({item: user}) => (
                <UserItem {...user}/>      
            )}
            ListEmptyComponent={<Text>Cargando...</Text>}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    }
})

export default UserList