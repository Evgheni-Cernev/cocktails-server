import React, {FC, memo, useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './stypes';
import CocktailsList from '../../components/CocktailsList/CocktailsList';
import useGetSearchQuery from '../../hooks/api/useGetSearchQuery';
import {Navigation} from '../../types';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import HeaderTabs from '../../components/HeadresTabs/HeadresTabs';
import Search from '../../components/Search/Search';
import {UserContext} from '../../../App';
import {useChechIsLogin} from '../../hooks/useCheckIsLogin';

type CocktailsScreenProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

const CocktailsScreen: FC<CocktailsScreenProps> = ({route, navigation}) => {
  const {filters, addFilters} = useContext(UserContext);
  const {isLoading, cocktail, refetch} = useGetSearchQuery(route);
  const isLogin = useChechIsLogin();
  useEffect(() => {
    console.log(!isLogin)

    if (!isLogin) {
      navigation.navigate('LoginScreen');
    }
  }, [isLogin]);

  return (
    <View style={styles.screen}>
      <View
        style={{
          paddingTop: 50,
          backgroundColor: '#000000',
        }}>
        <HeaderTabs
          filterName="alcoholType"
          activeTab={filters.selectedType}
          options={{btn1: {text: 'Alcohol'}, btn2: {text: 'No-alcohol'}}}
          onSelect={({selected}: {selected: string}) => {
            addFilters({...filters, selectedType: selected});
          }}
        />
        <Search navigation={navigation as any} />
      </View>
      <CocktailsList
        route={route}
        navigation={navigation}
        cocktails={cocktail}
        isLoading={isLoading}
        refetch={refetch}
      />
    </View>
  );
};

export default memo(CocktailsScreen);
