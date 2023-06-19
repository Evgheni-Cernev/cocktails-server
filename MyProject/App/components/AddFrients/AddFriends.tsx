import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Modal,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import SearchIcon from '../../assets/icons/Search';
import {styles} from './styles';
import useSearchUsersQuery from '../../hooks/api/useSearchUsersQuery';
import AddInviteIcon from '../../assets/icons/AddInvite';
import useAddUserFriendQuery from '../../hooks/api/useAddUserFriendQuery';
import RemoveFrendIcon from '../../assets/icons/RemoveFrend';
import {UserContext} from '../../../App';

const AddFriends = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) => {
  const textInputRef = useRef<TextInput>(null);
  const {userData} = useContext(UserContext);
  const {data, searchUsers} = useSearchUsersQuery();
  const handleInputChange = (text: string) => {
    text.length && searchUsers(text);
  };

  const [friendsAdded, setFriends] = useState<string[]>([]);

  const {data: resp, addUserFriend} = useAddUserFriendQuery();
  const friends = data
    ? data.filter((item: any) => item.email !== userData.email)
    : [];

  useEffect(() => {
    setFriends(userData.friends ?? []);
  }, []);

  const handleSetFriends = (id: string) => {
    if (friendsAdded.includes(id)) {
      setFriends(friendsAdded.filter(item => item !== id));
    } else {
      setFriends([...friendsAdded, id]);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={{flex: 1, backgroundColor: '#000000', padding: 30}}>
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
        <ScrollView style={{padding: 5}}>
          {friends &&
            friends.map((el: any) => {
              return (
                <TouchableOpacity
                  key={el._id}
                  onPress={() => {
                    handleSetFriends(el._id);
                  }}>
                  <View style={styles.container}>
                    <Text style={{color: 'white'}}>{el.email}</Text>
                    {(resp && resp.modifiedCount > 0) ||
                    friendsAdded && friendsAdded.includes(el._id) ? (
                      <RemoveFrendIcon style={{alignSelf: 'center'}} />
                    ) : (
                      <AddInviteIcon style={{alignSelf: 'center'}} />
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 60,
            paddingVertical: 16,
            borderTopWidth: 1,
            borderColor: '#828080',
          }}>
          <Button
            title="Close"
            color="#737500"
            onPress={() => {
              addUserFriend(friendsAdded);
              onClose();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AddFriends;
