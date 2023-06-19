import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import {styles} from './styles';
import Arrow from '../../assets/icons/Arrow';
import {Navigation} from '../../types';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import SendIcon from '../../assets/icons/Send';
import FastImage from 'react-native-fast-image';
import {UserContext} from '../../../App';
import EditIcon from '../../assets/icons/Edit';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import useUpdateUserQuery from '../../hooks/api/useUpdateUserQuery';
import {
  Asset,
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {MyAccountTabs} from '../../components/MyAccountTabs/MyAccountTabs';
// import {useGetUserPhoto} from '../../hooks/api/useGetUserPhoto';

type AccountScreenProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const AccountScreen: FC<AccountScreenProps> = ({navigation, route}) => {
  const {userData} = useContext(UserContext);
  const {updateUser} = useUpdateUserQuery();
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

  const bottomSheetModalRef = useRef<BottomSheetModal | null>(null);
  const handlePresentPress = () => {
    if (bottomSheetModalRef.current) {
      bottomSheetModalRef.current.present();
    }
  };

  const [imageUri, setImageUri] = useState<Asset | null>(null);
  const options: ImageLibraryOptions = {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  };
  const handleImageUpload = async () => {
    const images = await launchImageLibrary(options);

    if (images.assets) {
      const {type, fileName, uri} = images.assets[0];

      var formdata = new FormData();
      formdata.append('file', {type, name: fileName, uri});

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://6964-89-28-121-208.ngrok.io/api/user/uploadAvatar/' + userData._id,
        requestOptions,
      )
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      setImageUri(images.assets[0]);
    }
  };

  // const {getUserPhotoMutation, data} = useGetUserPhoto();

  // useEffect(() => {
  //   getUserPhotoMutation(userData._id);
  // }, []);

  const onSubmit = (data: any) => {
    updateUser(data);
    bottomSheetModalRef.current?.close();
  };
  console.log(userData);

  return (
    <View style={styles.screen} >
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
            {imageUri ? (
              <FastImage source={{uri: imageUri.uri}} style={styles.image} />
            ) : (
              <FastImage
                style={styles.image}
                source={
                  // data ? data.photo :
                   require('../../assets/Profile.png')}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
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
      <MyAccountTabs {...{navigation, route}} />
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
