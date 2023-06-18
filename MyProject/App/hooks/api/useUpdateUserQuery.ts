import { useMutation } from 'react-query';
import { api } from './api';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useUpdateUserQuery = () => {
  const { userData } = useContext(UserContext);
  const updateUserApi = async (fields: any) => {
    try {
      const response = await api.post(`/user/updateUser/${userData._id}`, { ...fields });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const mutation = useMutation((fields: any) => updateUserApi(fields), {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const updateUser = (fields: any) => {
    mutation.mutate(fields);
  };

  return { mutation, updateUser, data: mutation.data };
};

export default useUpdateUserQuery;