import React, { useContext, useRef, } from 'react';
import { View, Modal, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import SearchIcon from '../../assets/icons/Search';
import { styles } from './styles';
import useSearchUsersQuery from '../../hooks/api/useSearchUsersQuery';
import AddInviteIcon from '../../assets/icons/AddInvite';
import useAddUserFriendQuery from '../../hooks/api/useAddUserFriendQuery';
import RemoveFrendIcon from '../../assets/icons/RemoveFrend';
import { UserContext } from '../../../App';

const AddFriends = ({ visible, onClose }: { visible: boolean, onClose: () => void }) => {
  const textInputRef = useRef<TextInput>(null);
  const { userData } = useContext(UserContext);
  const { data, searchUsers } = useSearchUsersQuery()
  const handleInputChange = (text: string) => {
    text.length && searchUsers(text)
  };

  const { data: resp, addUserFriend } = useAddUserFriendQuery()

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={{ flex: 1, backgroundColor: "#000000", padding: 30 }}>
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
        <ScrollView style={{ padding: 5 }}>
          {data && data.map((el: any) => {
            return <TouchableOpacity key={el._id} onPress={() => {
              addUserFriend(el._id)
            }}>
              <View  style={styles.container}>
                <Text style={{ color: 'white' }}>{el.email}</Text>
                {
                 resp &&  resp.modifiedCount > 0 || userData.friends.includes(el._id) ?
                    <RemoveFrendIcon style={{ alignSelf: 'center' }} /> :
                    <AddInviteIcon style={{ alignSelf: 'center' }} />
                }

              </View>
            </TouchableOpacity>
          })}
        </ScrollView>
      </View>
    </Modal>
  );

}

export default AddFriends