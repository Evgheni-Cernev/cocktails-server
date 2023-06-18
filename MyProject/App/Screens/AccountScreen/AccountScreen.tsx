import React, {FC, useContext, useRef, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import ImagePicker from 'react-native-image-crop-picker';

import * as yup from 'yup';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import Arrow from '../../assets/icons/Arrow';
import {Navigation} from '../../types';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import SendIcon from '../../assets/icons/Send';
import FastImage from 'react-native-fast-image';
import {UserContext} from '../../../App';
import EditIcon from '../../assets/icons/Edit';
import UserInfoCard from './UserInfoCard';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import useUpdateUserQuery from '../../hooks/api/useUpdateUserQuery';
import {useUploadUserPhoto} from '../../hooks/api/useUploadeUserPhoto';
import {api} from '../../hooks/api/api';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

type AccountScreenProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  // password: yup
  //   .string()
  //   .min(6, 'Password must be at least 6 characters')
  //   .required('Password is required'),
});

const AccountScreen: FC<AccountScreenProps> = ({navigation}) => {
  const {userData} = useContext(UserContext);
  const {updateUser} = useUpdateUserQuery();

  const {uploadUser} = useUploadUserPhoto();

  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  const handlePresentPress = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  const [imageUri, setImageUri] = useState<any>(null);
  const options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  };
  const handleImageUpload = async () => {
    const images = await launchImageLibrary(options);
    if (images.assets) {
      const image = images.assets[0];

      const requestData = {
        method: 'post',
        body: new FormData(),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      // Append the file to the FormData
      requestData.body.append('file', image);

      console.log(image);
      fetch(
        `http://192.168.100.24:3001/api/user/uploadAvatar/${userData._id}`,
        requestData,
      )
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: userData.name,
      email: userData.email,
    },
  });
  const onSubmit = (data: any) => {
    updateUser(data);
    bottomSheetModalRef.current?.close();
  };

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
          <Pressable style={styles.imageContainer} onPress={handleImageUpload}>
            <FastImage
              style={styles.image}
              source={require('../../assets/Profile.png')}
              resizeMode={FastImage.resizeMode.contain}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: 'white',
              alignSelf: 'center',
            }}>
            {userData.name}
            {/* {userData.email.split('@')[0]} */}
          </Text>
        </View>
        <Pressable style={{alignSelf: 'center'}} onPress={handlePresentPress}>
          <EditIcon />
        </Pressable>
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
      <BottomSheetModal ref={bottomSheetModalRef} snapPoints={[500, 500]}>
        <View style={{paddingHorizontal: 16}}>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={{
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#737500',
                  paddingHorizontal: 15,
                }}
                onChangeText={onChange}
                value={value}
                placeholder="Name"
              />
            )}
          />
          {errors.name && (
            <Text style={{color: 'red', paddingHorizontal: 15, marginTop: 5}}>
              {errors.name.message}
            </Text>
          )}

          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <TextInput
                style={{
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#737500',
                  paddingHorizontal: 15,
                  marginTop: 10,
                }}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
              />
            )}
          />
          {errors.email && (
            <Text style={{color: 'red', paddingHorizontal: 15, marginTop: 5}}>
              {errors.email.message}
            </Text>
          )}

          {/* <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({field: {onChange, value}}) => (
              <TextInput
                onChangeText={onChange}
                value={value ?? ''}
                placeholder="Password"
                secureTextEntry
              />
            )}
          /> */}
          {/* {errors.password && <Text>{errors.password.message}</Text>} */}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            color="#737500"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default AccountScreen;
