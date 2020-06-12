import React, { useContext } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import AuthContext from '../../context/auth'


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
})

const SignIn = () => {
    const { signed, signIn } = useContext(AuthContext)
        console.log(signed)
    function handleSingIn() {
        signIn()               
    }

    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={handleSingIn} />
        </View>
    )
}

export default SignIn