import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './stypes';
import CocktailsList from '../../components/CocktailsList/CocktailsList';
import useGetSearchQuery from '../../hooks/api/useGetSearchQuery';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';

type CocktailsScreenProps = {
    navigation: Navigation,
    route: RouteProp<ParamListBase>
};

const CocktailsScreen: FC<CocktailsScreenProps> = ({ route }) => {
    const { isLoading, cocktail, refetch } = useGetSearchQuery({
        route,
        data: {
            "ingredients": ["Водка"],
            "type": {
                "non_alcoholic": true
            }
        }
    })

    return (
        <View style={styles.screen} >
            <CocktailsList cocktails={cocktail} isLoading={isLoading} refetch={refetch} />
        </View>
    );
};

export default CocktailsScreen;