/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { RecipScreenRouteProp } from '../../types';
import FastImage from 'react-native-fast-image';
type RecipScreenProps = {
    route: RouteProp<ParamListBase>
};
const RecipScreen: FC<RecipScreenProps> = ({ route: data }) => {
    const route = data as RecipScreenRouteProp
    return (
        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.container}>
                <View style={styles.itemContainer}>
                    <Text
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            fontSize: 24,
                            fontWeight: '700',
                            color: '#fff',
                        }}>
                        {route.params.Recipe.Name}
                    </Text>
                </View>

             
                    <View style={styles.imageContainer}>
                        <FastImage
                            style={styles.itemImage}
                            source={{
                                uri: route.params.ImageURL,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain} />
                    </View>


                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Ингредиенты:</Text>
                    <View>
                        {route.params.Ingredient.map((ingredient, index) => (
                            <Text
                                style={styles.text}
                                key={index}>{`${ingredient.Name} ${ingredient.Value} ${ingredient.Unit}`}</Text>
                        ))}
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Необходимые материалы:</Text>
                    <View>
                        {route.params.Tooles.map((tool, index) => (
                            <Text style={styles.text} key={index}>{`${tool.Name} ${tool.Value} ${tool.Unit}`}</Text>
                        ))}
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.ingridientsContainer}>
                        {route.params.Contents.IngredientsImg.map((imgUrl, index) => (
                            <Image style={styles.image} key={index} source={{ uri: imgUrl }} />
                        ))}
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.list}>
                        {route.params.Recipe.Steps.map((step, index) => (
                            <Text style={styles.listItem} key={index}>
                                {`${index + 1}) ${step}`}
                            </Text>
                        ))}
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Интересный факт:</Text>
                    <Text style={styles.listItem}>{route.params.History}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default RecipScreen;