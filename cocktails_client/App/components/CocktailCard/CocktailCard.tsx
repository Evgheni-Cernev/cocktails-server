import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './styles';
import Image from '../Image/Image';
import { Cocktail } from '../../types';
import CocktailsShortInfo from '../CocktailsShortInfo/CocktailsShortInfo';

const CocktailCard = ({ cocktail }: { cocktail: Cocktail }) => {
    return (
        <View key={cocktail._id} style={styles.container}>
            <Image image={cocktail.ImageURL} id={cocktail._id} />
            <TouchableOpacity
                style={styles.flexed}
                // onPress={() =>
                //     navigation.navigate('CoctailRecipesComponent', {
                //         name: cocktail.NameRU,
                //         id: cocktail._id,
                //         cocktail: cocktail,
                //     })
                // }
                >
                <CocktailsShortInfo name={cocktail.NameRU} tags={cocktail.Tags} />
            </TouchableOpacity>
        </View>
        // <TouchableOpacity key={item.id} style={styles.menuItem}>
        //     <Text style={styles.menuItemText}>{item.title}</Text>
        // </TouchableOpacity>
    );
};



export default CocktailCard;