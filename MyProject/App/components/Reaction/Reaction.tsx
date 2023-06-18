import {Button, TextInput, TouchableOpacity, View} from 'react-native';
import LikeActiveIcon from '../../assets/icons/LikeActiveIcon';
import LikeIcon from '../../assets/icons/LikeIcon';
import ShaeredIcon from '../../assets/icons/ShaeredIcon';
import {styles} from './styles';
import {useContext, useRef, useState} from 'react';
import {UserContext} from '../../../App';
import useLikedQuery from '../../hooks/api/useLikedQuery';
import {BottomSheetModal, BottomSheetScrollView} from '@gorhom/bottom-sheet';
import FriendsList from '../FriendList/FriendList';
import SearchIcon from '../../assets/icons/Search';
import useGetUserFriendsQuery from '../../hooks/api/useGetUserFriendsQuery';

const Reaction = ({id}: {id: string}) => {
  const {userData, addReaction} = useContext(UserContext);
  const {addLike} = useLikedQuery();
  const { isLoading, isError, data, error, refetch } = useGetUserFriendsQuery()

  const isLiked = userData.liked_cocktails?.includes(id);

  const [searchQuery, setSearchQuery] = useState('');
  const [chooseFriends, setChooseFriends] = useState<string[]>([]);

  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  const handlePresentPress = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  const filteredFriends = (data ?? []).filter(friend =>
    friend.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const onChooseFriends = (id: string) => {
    if (chooseFriends.includes(id)) {
      setChooseFriends(chooseFriends.filter(item => item !== id));
    } else {
      setChooseFriends([...chooseFriends, id]);
    }
  };

  const onShare = () => {
    // addUserFriend()
  }

  return (
    <>
      <View style={styles.reaction}>
        <TouchableOpacity
          onPress={() => {
            addReaction(id);
            addLike();
          }}>
          {isLiked ? <LikeActiveIcon /> : <LikeIcon />}
        </TouchableOpacity>
        <View style={styles.deviderVertical} />
        <TouchableOpacity onPress={handlePresentPress}>
          <ShaeredIcon />
        </TouchableOpacity>
      </View>
      <BottomSheetModal ref={bottomSheetModalRef} snapPoints={[500, 500]}>
        <View style={styles.searchContainer}>
          <View style={styles.searchSection}>
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search friends..."
            />
            <SearchIcon />
          </View>
        </View>
        <BottomSheetScrollView style={{flex: 1}}>
          <FriendsList
            friends={filteredFriends}
            onChooseFriens={onChooseFriends}
            chooseFriends={chooseFriends}
          />
        </BottomSheetScrollView>
        <View style={styles.buttonContainer}>
          <Button title="Share" color="#737500" onPress={() => {}} />
        </View>
      </BottomSheetModal>
    </>
  );
};

export default Reaction;