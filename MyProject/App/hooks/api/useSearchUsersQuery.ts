import { useMutation } from 'react-query';
import { api } from './api';

const useSearchUsersQuery = () => {
  const searchUsersApi = async (value: string) => {
    try {
      const response = await api.post('/user/search', { query: value });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const mutation = useMutation((value: string) => searchUsersApi(value), {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const searchUsers = (value: string) => {
    mutation.mutate(value);
  };

  return { mutation, searchUsers, data: mutation.data };
};

export default useSearchUsersQuery;