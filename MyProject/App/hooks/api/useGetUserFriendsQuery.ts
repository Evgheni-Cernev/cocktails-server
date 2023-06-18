import { useMutation, useQuery } from 'react-query';
import { api } from './api';
import { User, UserContext } from '../../../App';
import { useContext } from 'react';

const useGetUserFriendsQuery = () => {
  const { userData } = useContext(UserContext);
  const getUserFriendsApi = async () => {
    try {
      const response = await api.post('/user/getFriends', { ids: userData.friends});
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const { isLoading, isError, data, error, refetch } = useQuery<{},{}, User[]>('getUserFriendsApi', getUserFriendsApi, { keepPreviousData: true });

  return  { isLoading, isError, data, error, refetch };
};

export default useGetUserFriendsQuery;