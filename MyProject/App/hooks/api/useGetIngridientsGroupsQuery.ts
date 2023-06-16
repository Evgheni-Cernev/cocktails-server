import { useQuery } from 'react-query';
import { api } from './api';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const useGetIngridientsGroupsQuery = () => {
  const { filters } = useContext(UserContext);
  async function fetchData() {
    try {
      const response = await api.get('/ingridients/groups/type/' + filters.selectedType.toLowerCase() + `/${filters.filtersActiveTab === 'Base'}`);

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  }

  const { isLoading, isError, data: ingridientsGroups, error, refetch } = useQuery<boolean, boolean, IngridientsGroups[]>([...filters?.selectedType ?? [], filters.filtersActiveTab ?? [], 'IngridientsGroups'], fetchData, { keepPreviousData: true });

  return { isLoading, isError, ingridientsGroups, error, refetch };
};

export default useGetIngridientsGroupsQuery;

export interface IngridientsGroups {
  _id: string;
  name: string;
  img: string;
  items?: IngridientItem[];
  base: boolean;
  type: string;
}

export interface IngridientItem {
    _id: string;
    name: string;
    items?: IngridientItem[];
    img: string;
}


