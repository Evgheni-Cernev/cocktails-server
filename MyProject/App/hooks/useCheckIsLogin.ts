import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react"

export const useChechIsLogin = () => {
    const [isLogin, setIsLigin] = useState(false);
    const chechIsLogin = async () => {
        const userId = AsyncStorage && await AsyncStorage.getItem('userId');
        setIsLigin(!!userId)
    }
    useEffect(() => {
        chechIsLogin()
    }, [])
    return isLogin;
}