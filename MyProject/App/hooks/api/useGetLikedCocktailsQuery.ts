import { useQuery, } from 'react-query';
import { api } from './api';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useGetLikedCocktailsQuery = () => {
  const { userData } = useContext(UserContext);

  const addLikes = async () => {
    try {
      const response = await api.post('/cocktails/favorites', { ids: userData?.liked_cocktails });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const { isLoading, isError, error, data, refetch } = useQuery(userData?.liked_cocktails, addLikes, {keepPreviousData: true});

  return { isLoading, isError, error, data, refetch };
};

export default useGetLikedCocktailsQuery;