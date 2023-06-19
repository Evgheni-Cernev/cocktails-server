import {View} from 'react-native';
import UserInfoCard from '../../Screens/AccountScreen/UserInfoCard';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {FC, useContext} from 'react';
import {Navigation} from '../../types';
import {UserContext} from '../../../App';

type MyAccountTabsProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

export const MyAccountTabs: FC<MyAccountTabsProps> = ({navigation}) => {
  const {userData} = useContext(UserContext);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <UserInfoCard
        name={'Friends'}
        count={userData.friends ? userData.friends.length : 0}
        onPress={() => {
          navigation.navigate('FriendsScreen');
        }}
      />
      <UserInfoCard
        name={'Filters'}
        count={userData.filters ? Object.values(userData.filters).length: 0}
      />
      <UserInfoCard
        name={'Cocktails'}
        count={userData.liked_cocktails ? userData.liked_cocktails.length : 0}
      />
    </View>
  );
};
