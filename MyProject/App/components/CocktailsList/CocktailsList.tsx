import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import CocktailCard from '../CocktailCard/CocktailCard';
import { styles } from './styles';
import { Cocktail, Navigation } from '../../types';
import { RouteProp, ParamListBase } from '@react-navigation/native';

const CocktailsList = ({navigation,route, cocktails = [], isLoading = false, refetch }: {  route: RouteProp<ParamListBase>,navigation: Navigation, cocktails: Cocktail[], isLoading: boolean, refetch: () => void }) => {
    return (
        <View style={styles.container}>
            <ScrollView style={{  paddingHorizontal: 5, paddingTop: 5 }}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={() => {
                        refetch()
                    }} />
                }
            >
                {cocktails.map((cocktail) => (
                    <CocktailCard  route={route} navigation={navigation} key={cocktail._id} cocktail={cocktail} />
                ))}
            </ScrollView>
        </View>
    );
};



export default CocktailsList;