import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import Image from '../Image/Image';
import { Cocktail, Navigation } from '../../types';
import CocktailsShortInfo from '../CocktailsShortInfo/CocktailsShortInfo';
import { RouteProp, ParamListBase } from '@react-navigation/native';

const CocktailCard = ({ navigation, cocktail, route }: { navigation: Navigation, route: RouteProp<ParamListBase>, cocktail: Cocktail }) => {
    return (
        <View key={cocktail._id} style={styles.container}>
            <Image image={cocktail.ImageURL} id={cocktail._id} />
            <TouchableOpacity
                style={styles.flexed}
                onPress={() =>
                    navigation.navigate('RecipScreen', cocktail)
                }
                >
                <CocktailsShortInfo name={cocktail.NameRU} tags={cocktail.Tags} />
            </TouchableOpacity>
        </View>
    );
};



export default CocktailCard;