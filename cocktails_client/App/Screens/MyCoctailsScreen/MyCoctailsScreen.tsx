import React from 'react';
import { View } from 'react-native';
import useGetUserDataQuery from '../../hooks/api/useGetUserQuery';
import useGetLikedCocktailsQuery from '../../hooks/api/useGetLikedCocktailsQuery';
import { styles } from './stypes';
import CocktailsList from '../../components/CocktailsList/CocktailsList';

const MyCoctailsScreen = () => {
  useGetUserDataQuery()

  const { data, isLoading, refetch } = useGetLikedCocktailsQuery()

  return (
    <View style={styles.screen} >
      <CocktailsList cocktails={data} isLoading={isLoading} refetch={refetch} />
    </View>
  );
};

export default MyCoctailsScreen;