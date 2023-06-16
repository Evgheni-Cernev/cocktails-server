import React, { FC, useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
    headerName?: string | null
};

const Header: FC<CocktailsScreenProps> = ({ route, navigation, headerName }) => {
    const { filters, addFilters } = useContext(UserContext);
    const { saveFilter } = useSaveFiltersQuery('filter1')

    return (
        <View style={{
            backgroundColor: '#1A1919',
        }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={styles.container}>
                        <Arrow style={styles.icon} />
                        <Text style={styles.title}>{headerName || route.name}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bookContainer} onPress={() => {
                    saveFilter()
                }}>
                    <BookIcon style={styles.bookIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.devider} />

            <DropdownComponent
                selectedItem={filters.selectedType}
                setItem={({ selected }: { selected: string }) => {
                    addFilters({ ...filters, selectedType: selected })

                }}
            />
            <View style={styles.devider} />
            <HeaderTabs
                filterName="filtersActiveTab"
                activeTab={filters.filtersActiveTab}
                options={{ btn1: { text: 'Base' }, btn2: { text: 'Additions' } }}
                onSelect={({ selected }: { selected: string }) => addFilters({ ...filters, filtersActiveTab: selected })}
            />
        </View>
    );
};

export default Header;