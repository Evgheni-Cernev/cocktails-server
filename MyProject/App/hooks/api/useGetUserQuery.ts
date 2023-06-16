import { useQuery } from 'react-query';
import { api } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useGetUserDataQuery = () => {
  const { addUserData } = useContext(UserContext);

  async function fetchData() {
    const userId = AsyncStorage && await AsyncStorage.getItem('userId');
    if (userId) {
      try {
        const response = await api.get('/user/user_data/' + userId);

        addUserData(response.data ?? {})
        return response.data ?? {};
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    }
  }

  const { isLoading, isError, data: resData, error, refetch } = useQuery('UserData', fetchData, { keepPreviousData: true });
  return { isLoading, isError, userData: resData, error, refetch };
};

export default useGetUserDataQuery;