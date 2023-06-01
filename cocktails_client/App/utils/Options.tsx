import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderTabs from '../components/HeadresTabs/HeadresTabs';

import Search from '../components/Search/Search';
import Arrow from '../assets/icons/Arrow';
import BookIcon from '../assets/icons/Book';
import DropdownComponent from '../components/Dropdown/Dropdown';
import { styles } from './styles';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { UserContext } from '../../App';
import useSaveFiltersQuery from '../hooks/api/useSaveFiltersQuery';

export const Options = () => {
    const { filters, addFilters } = useContext(UserContext);
    return {
        screenOptions: {
            header: ({ route, navigation }: {
                route: RouteProp<ParamListBase, string>;
                navigation: any;
            }) => {

                const options = { btn1: { text: 'Alcohol' }, btn2: { text: 'No-alcohol' } }
                if (route.name === 'Cocktails') {
                    return false
                }
                return (
                    <View style={{
                        backgroundColor: '#101010',
                    }}>
                        <HeaderTabs
                            filterName="alcoholType"
                            activeTab={filters.selectedType}
                            options={options}
                            onSelect={({ selected }: { selected: string }) => {
                                addFilters({ ...filters, selectedType: selected })
                            }}
                        />
                        <Search navigation={navigation} />
                    </View>
                );
            },
        },

        screenNavigatorOptions: {
            header: ({ route, navigation }: {
                route: RouteProp<ParamListBase, string>;
                navigation: any;
            }) => {

                const {saveFilter} = useSaveFiltersQuery('filter1')
                const options = { btn1: { text: 'Alcohol' }, btn2: { text: 'No-alcohol' } }

                if (route.name === 'CocktailsScreen') {
                    return (
                        <View style={{
                            backgroundColor: '#101010',
                        }}>
                            <HeaderTabs
                                filterName="alcoholType"
                                activeTab={filters.selectedType}
                                options={options}
                                onSelect={({ selected }: { selected: string }) => {
                                    addFilters({ ...filters, selectedType: selected })
                                }
                                }
                            />
                            <Search navigation={navigation as any} />
                        </View>
                    )
                }
                return (
                    <View style={{
                        backgroundColor: '#101010',
                    }}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <View style={styles.container}>
                                    <Arrow style={styles.icon} />
                                    <Text style={styles.title}>{route.name}</Text>
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
            },
        }
    }

}