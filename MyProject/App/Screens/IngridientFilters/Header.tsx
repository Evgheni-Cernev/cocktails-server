import React, { FC, InputHTMLAttributes, useContext, useRef, useState } from 'react';
import { Text, TouchableOpacity, View, Keyboard, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Arrow from '../../assets/icons/Arrow';
import DropdownComponent from '../../components/Dropdown/Dropdown';
import HeaderTabs from '../../components/HeadresTabs/HeadresTabs';
import { UserContext } from '../../../App';
import BookIcon from '../../assets/icons/Book';
import useSaveFiltersQuery from '../../hooks/api/useSaveFiltersQuery';

type CocktailsScreenProps = {
    navigation: Navigation,
    route: RouteProp<ParamListBase>,
    headerName?: string | null,
    handleButtonPress: () => void;
};

const Header: FC<CocktailsScreenProps> = ({ route, navigation, headerName, handleButtonPress}) => {
   
    return (
        <View style={{
            backgroundColor: '#101010',
        }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.container}>
                        <Arrow style={styles.icon} />
                        <Text style={styles.title}>{headerName || route.name}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bookContainer} onPress={handleButtonPress
                    //     () => {
                    //     saveFilter()
                    // }
                }>
                    <BookIcon style={styles.bookIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.devider} />
            
        </View>
    );
};

export default Header;