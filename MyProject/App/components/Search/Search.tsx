import React, { useRef } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import SearchIcon from '../../assets/icons/Search';
import FilterIcon from '../../assets/icons/FilterIcon';
import { styles } from './styles';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { ParamListBase } from '@react-navigation/native';


interface SearchProps {
    navigation: BottomTabNavigationProp<ParamListBase, string>;
}

const Search = ({ navigation }: SearchProps) => {
    const textInputRef = useRef<TextInput>(null);
    const handleInputChange = (text: string) => {
        navigation.setParams({ search: text })
    };
    return (
        <View style={styles.filterContainer}>
            <View style={styles.searchSection}>
                <SearchIcon />
                <TextInput
                    ref={textInputRef}
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#828080"
                    underlineColorAndroid="transparent"
                    onChangeText={handleInputChange}
                />
            </View>
            <Pressable onPress={() => navigation.navigate('Filters')}>
                <FilterIcon />
            </Pressable>
        </View>
    );
};

export default Search;
