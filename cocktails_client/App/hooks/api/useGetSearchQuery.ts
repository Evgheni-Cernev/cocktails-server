import { useQuery } from 'react-query';
import { api } from './api';
import { Cocktail } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RequestType = {
  route?: RouteProp<ParamListBase>,
  data: {
    "ingredients": string[],
    "type": {
      "non_alcoholic": boolean
    }
  }
}

const useGetSearchQuery = ({ data, route }: RequestType) => {
  const { filters } = useContext(UserContext);
  const params = route?.params as { search: string };
  data.type.non_alcoholic = filters.selectedType == 'No-alcohol'

  async function fetchData() {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await api.post('/cocktails/search', data, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }
  const { isLoading, isError, data: resData, error, refetch } = useQuery('search' + JSON.stringify(filters), fetchData, {keepPreviousData: true});

  const filteredData = resData ? (resData as Cocktail[]).filter(item => {
    return item.NameRU.toLowerCase().indexOf(params && params?.search?.toLowerCase()) !== -1
  }) : [] as Cocktail[]


  return { isLoading, isError, cocktail: params?.search ? filteredData : resData, error, refetch };
};

export default useGetSearchQuery;