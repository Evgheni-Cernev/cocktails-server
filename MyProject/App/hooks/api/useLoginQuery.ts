import { useMutation } from 'react-query';
import { api } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

interface LoginRequest {
  email: string;
  password: string;
}

const useLoginQuery = () => {
  const loginMutation = useMutation(loginRequest);
  async function loginRequest(userData: LoginRequest) {
    try {
      const response = await api.post('/auth/login', userData);
      const token = response.data.token;
      const userId = response.data.id;

      AsyncStorage && await AsyncStorage.setItem('token', token); 
      AsyncStorage && await AsyncStorage.setItem('userId', userId);
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  return loginMutation;
};

export default useLoginQuery;