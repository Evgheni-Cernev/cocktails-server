import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

const CocktailsShortInfo = ({ name, tags }: { name: string, tags: string[] }) => {
    return (
        <View style={styles.info}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.devider} />
                <Text style={styles.tag}>
                    {tags.join(', ')}
                </Text>
            </View>
        </View>
    );
}

export default CocktailsShortInfo