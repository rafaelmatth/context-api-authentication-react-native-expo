import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [access, setAccess] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function localStorageData(){
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token')

            if (storagedToken){
                setAccess(storagedToken)
                setLoading(false)
            }else{
                setLoading(false)
            }
        }

        localStorageData()
    }, [])
    
    async function signIn(){    
        const data = {
            email: 'admin@email.com',
            password: 'admin'
        }
        const response = await api.post('api/token/', data)        
        setAccess(response.data.access)   
        
        await AsyncStorage.setItem('@RNAuth:token', response.data.access)
    }

    function signOut(){
        AsyncStorage.clear().then( () => {
            setAccess(null)
        })        
    }



    return(
        <AuthContext.Provider value={{signed: !!access, access, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )   
}

export default AuthContext;