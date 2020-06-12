import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../context/auth'


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
})

const SignIn = () => {
     const { signOut } = useContext(AuthContext)
    
    function handleSingOut() {
        signOut()               
    }

    return (
        <View style={styles.container}>
            <Button title="Sign out" onPress={handleSingOut} />
        </View>
    )
}

export default SignIn