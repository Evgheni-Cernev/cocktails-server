import { useContext } from "react";
import { useMutation } from "react-query";
import { UserContext } from "../../../App";
import { api } from "./api";
import { toFormData } from "axios";

export const useUploadUserPhoto = () => {
  const { userData } = useContext(UserContext);

  const uploadUserPhoto = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await api.post(
        `/user/uploade-photo/${userData._id}`,
        toFormData(file)
      );

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const mutation = useMutation((file: any) => uploadUserPhoto(file), {
    onError: (error) => {
      console.error('Mutation error:', error);
    },
  });

  const uploadUser = (file: any) => {
    mutation.mutate(file);
  };

  return { mutation, uploadUser, data: mutation.data };
};