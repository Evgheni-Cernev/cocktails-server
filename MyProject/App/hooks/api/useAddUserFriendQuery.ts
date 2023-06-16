import { useMutation } from 'react-query';
import { api } from './api';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useAddUserFriendQuery = () => {
  const { userData } = useContext(UserContext);
  const addUserFriendApi = async (friendId: string) => {
    try {
      const response = await api.post('/user/addFriend', { userId: userData._id, friendId: [...userData.friends, ...new Set([friendId])] });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const mutation = useMutation((friendId: string) => addUserFriendApi(friendId), {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const addUserFriend = (friendId: string) => {
    mutation.mutate(friendId);
  };

  return { mutation, addUserFriend, data: mutation.data };
};

export default useAddUserFriendQuery;