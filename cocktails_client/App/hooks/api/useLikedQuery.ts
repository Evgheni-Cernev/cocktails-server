import { useQuery, useMutation, useQueryClient } from 'react-query';
import { api } from './api';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import useGetUserDataQuery from './useGetUserQuery';

const useLikedQuery = () => {
  const { userData } = useContext(UserContext);

  const addLikes = async () => {
    const userId = await AsyncStorage.getItem('userId');
    try {

      const response = await api.post('/user/user_data', { liked: userData?.liked_cocktails, userId });
      // useGetUserDataQuery()
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const { isLoading, isError, error } = useQuery([...userData.liked_cocktails, 'Liked'], addLikes, { keepPreviousData: true });

  const mutation = useMutation(addLikes, {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const addLike = () => {
    mutation.mutate();
  };


  return { isLoading, isError, error, addLike };
};

export default useLikedQuery;