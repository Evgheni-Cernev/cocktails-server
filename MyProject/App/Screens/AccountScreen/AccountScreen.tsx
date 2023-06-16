import React, {FC, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Arrow from '../../assets/icons/Arrow';
import {Navigation} from '../../types';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import SendIcon from '../../assets/icons/Send';
import FastImage from 'react-native-fast-image';
import {UserContext} from '../../../App';
import EditIcon from '../../assets/icons/Edit';
import UserInfoCard from './UserInfoCard';

type AccountScreenProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

const AccountScreen: FC<AccountScreenProps> = ({navigation}) => {
  const {userData} = useContext(UserContext);

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.container}>
            <Arrow style={styles.icon} />
            <Text style={styles.title}>{'My account'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sendContainer}
          onPress={() => {
            navigation.navigate('ChatScreenScreen');
          }}>
          <SendIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.devider} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={styles.imageContainer}>
            <FastImage
              style={styles.image}
              source={require('../../assets/Profile.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'white',
              alignSelf: 'center',
            }}>
            {userData.email.split('@')[0]}
          </Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <EditIcon />
        </View>
      </View>
      <View style={styles.devider} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <UserInfoCard
          name={'Friends'}
          count={userData.friends.length}
          onPress={() => {
            navigation.navigate('FriendsScreen');
          }}
        />
        <UserInfoCard
          name={'Filters'}
          count={Object.values(userData.filters).length}
        />
        <UserInfoCard
          name={'Cocktails'}
          count={userData.liked_cocktails.length}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
