import { useMutation, useQueryClient } from 'react-query';
import { api } from './api';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import useGetUserDataQuery from './useGetUserQuery';

const useUpdateUserQuery = () => {
  const { userData } = useContext(UserContext);
  const queryClient = useQueryClient();
  const { refetch } = useGetUserDataQuery();
  
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
    // onSuccess: () => {
    //   queryClient.invalidateQueries('UserData');
    //   refetch();
    // },
  });

  const updateUser = (fields: any) => {
    mutation.mutate(fields);
  };

  return { mutation, updateUser, data: mutation.data };
};

export default useUpdateUserQuery;