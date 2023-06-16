
import React, { FC, useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Navigation } from '../../types';
import { RouteProp, ParamListBase } from '@react-navigation/native';

import { UserContext } from '../../../App';
import Arrow from '../../assets/icons/Arrow';
import AddIcon from '../../assets/icons/Add';
import { RootSiblingParent } from 'react-native-root-siblings';
import AddFriends from '../../components/AddFrients/AddFriends';

type FriendsScreenProps = {
  navigation: Navigation,
  route: RouteProp<ParamListBase>,
};


const FriendsScreen: FC<FriendsScreenProps> = ({ navigation }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.container}>
            <Arrow style={styles.icon} />
            <Text style={styles.title}>{'Friends'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendContainer} onPress={togglePopup}>
          <AddIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.devider} />
      <Text>Friends</Text>
      <AddFriends visible={showPopup} onClose={togglePopup} />
    </View>
  );
};

export default FriendsScreen;