import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import useGetUserDataQuery from '../../hooks/api/useGetUserQuery';
import useGetLikedCocktailsQuery from '../../hooks/api/useGetLikedCocktailsQuery';
import { styles } from './stypes';
import CocktailsList from '../../components/CocktailsList/CocktailsList';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Arrow from '../../assets/icons/Arrow';

const MyCoctailsScreen = ({route, navigation}:{ route: RouteProp<ParamListBase>,navigation: Navigation}) => {
  useGetUserDataQuery()

  const { data, isLoading, refetch } = useGetLikedCocktailsQuery()
  return (
    <View style={styles.screen} >
       <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.container}>
            <Arrow style={styles.icon} />
            <Text style={styles.title}>{'My Cocktails'}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.devider} />
      <CocktailsList navigation={navigation} route={route} cocktails={data} isLoading={isLoading} refetch={refetch} />
    </View>
  );
};

export default MyCoctailsScreen;