import React from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
import {styles} from './styles';
import { User } from '../../../App';

const FriendsList = ({
  chooseFriends,
  friends,
  onChooseFriens,
}: {
  friends: User[];
  onChooseFriens: (id: string) => void;
  chooseFriends: string[];
}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {friends.map(friend => {
          return (
            <Pressable
              key={friend._id}
              style={styles.friendItemContainer}
              onPress={() => onChooseFriens(`${friend._id}`)}>
              <View style={styles.friendItem}>
                <FastImage
                  source={{
                    uri: friend.photo,
                    priority: FastImage.priority.high,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                  style={styles.photo}
                />
                <Text style={styles.name}>{friend.name}</Text>
              </View>
                <View
                  style={
                    chooseFriends.includes(`${friend._id}`)
                      ? styles.active
                      : styles.select
                  }
                />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default FriendsList;
