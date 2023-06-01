import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { IngridientsGroups } from '../../hooks/api/useGetIngridientsGroupsQuery';

function FilterItem(props: IngridientsGroups) {
    const { _id, name, items, img } = props;
    const [data, setData] = useState([]);
    const cardImg = items ? items[0].img : img;
    // useEffect(() => {
    //     fetch('http://20.100.181.92:3001/api/ingridients/' + name, {
    //         method: 'GET',
    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             setData(result.items);
    //         })
    //         .catch(error => console.error('error', error));
    // }, [name]);

    return (
        <View key={_id} style={styles.container}>
            <TouchableOpacity
                style={styles.selectContainer}
                onPress={() => {
                    // if (props.route.params.name === 'Filter') {
                    //     onSelect({name: 'selectedGroup', value: [name]});
                    //     onSelect({name: 'selectedItem', value: data.map(e => e.name)});
                    // } else {
                    //     onSelect({name: 'selectedItem', value: [name]});
                    // }
                }}>
                {/* <View style={selected.includes(name) || selectedGroup.includes(name) ? styles.active : styles.select} /> */}
            </TouchableOpacity>
            <TouchableOpacity
                style={{ ...styles.selectContainer, ...{ width: '90%' } }}
                onPress={() => {
                    // item.items &&
                    //     navigation.push('FiltersComponent', {
                    //         name: name,
                    //         ingridients: data,
                    //     });
                }}>
                <View style={styles.selectSection}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: cardImg ?? '',
                            }}
                            style={styles.image}
                        />
                        <Image
                            source={{
                                uri: cardImg ?? '',
                            }}
                            blurRadius={10}
                            style={styles.imageBG}
                        />
                    </View>
                </View>
                <View style={styles.infoSection}>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
export default FilterItem;
