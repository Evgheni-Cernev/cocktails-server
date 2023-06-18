import { useMutation } from "react-query";
import { api } from "./api";

export const useGetUserPhoto = () => {

  const getUserPhoto = async (id: string) => {
    try {
      const response = await api.get(
        `/user/getUserAvatar/${id}`
      );

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const mutation = useMutation((id: string) => getUserPhoto(id), {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const getUserPhotoMutation = (id: string) => {
    mutation.mutate(id);
  };

  return { mutation, getUserPhotoMutation, data: mutation.data };
};