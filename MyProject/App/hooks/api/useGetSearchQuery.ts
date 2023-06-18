import { useQuery } from 'react-query';
import { api } from './api';
import { Cocktail } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const useGetSearchQuery = (route : RouteProp<ParamListBase>) => {
  const { filters } = useContext(UserContext);
  const params = route?.params as { search: string };
  const data = {
    ingredients: filters.ingridients,
    type: {
      non_alcoholic: filters.selectedType == 'No-alcohol'
    }
  }
  async function fetchData() {
    try {
      const response = await api.post('/cocktails/search', data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
  const { isLoading, isError, data: resData, error, refetch } = useQuery('useGetSearchQuery', fetchData, { keepPreviousData: true });

  const filteredData = resData ? (resData as Cocktail[]).filter(item => {
    return item.NameRU.toLowerCase().indexOf(params && params?.search?.toLowerCase()) !== -1
  }) : [] as Cocktail[]


  return { isLoading, isError, cocktail: params?.search ? filteredData : resData, error, refetch };
};

export default useGetSearchQuery;