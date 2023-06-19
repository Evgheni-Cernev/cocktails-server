import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

export const useChechIsLogin = () => {
    const [isLogin, setIsLigin] = useState(false);
    const chechIsLogin = async () => {
        const token = AsyncStorage && await AsyncStorage.getItem('token');
    console.log(token)

        setIsLigin(!!token)
    }
    useEffect(() => {
        chechIsLogin()
    }, [])
    return isLogin;
}