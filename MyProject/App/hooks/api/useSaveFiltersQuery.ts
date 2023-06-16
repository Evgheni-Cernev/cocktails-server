import {useQuery, useMutation} from 'react-query';
import {api} from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import {UserContext} from '../../../App';

const useSaveFiltersQuery = (name: string) => {
  const {filters} = useContext(UserContext);

  const saveFilters = async () => {
    const userId = AsyncStorage && await AsyncStorage.getItem('userId');
    try {
      const response = await api.post('/user/user_filters', {
        [name]: filters,
        userId,
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const {isLoading, isError, error} = useQuery('Save', saveFilters, {
    keepPreviousData: true,
  });

  const mutation = useMutation(saveFilters, {
    onError: error => {
      console.error('Mutation error:', error);
    },
  });

  const saveFilter = () => {
    mutation.mutate();
  };

  return {isLoading, isError, error, saveFilter};
};

export default useSaveFiltersQuery;
