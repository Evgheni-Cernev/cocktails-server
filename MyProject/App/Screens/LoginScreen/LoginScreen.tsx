import React, {FC, useContext, useEffect} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import useLoginQuery from '../../hooks/api/useLoginQuery';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {styles} from './styles';
import {Navigation} from '../../types';
import {RouteProp, ParamListBase} from '@react-navigation/native';
import {UserContext} from '../../../App';
import { useChechIsLogin } from '../../hooks/useCheckIsLogin';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

type LoginScreenProps = {
  navigation: Navigation;
  route: RouteProp<ParamListBase>;
};

const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const loginMutation = useLoginQuery(navigation);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({email, password}: any) => {
    loginMutation.mutate({email, password});
  };

  const isLogin = useChechIsLogin();
  useEffect(() => {
    console.log(!isLogin)

    if (isLogin) {
      navigation.navigate('CocktailsScreen');
    }
  }, [isLogin]);

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{paddingHorizontal: 16, paddingTop: 60}}>
        <Text>Email</Text>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={{
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#737500',
                paddingHorizontal: 15,
                marginTop: 10,
              }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        {errors.email && (
          <Text
            style={{
              color: 'red',
              paddingHorizontal: 15,
              marginTop: 5,
              marginBottom: 30,
            }}>
            {errors.email.message}
          </Text>
        )}

        <Text>Password</Text>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={{
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#737500',
                paddingHorizontal: 15,
                marginTop: 10,
              }}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
          )}
        />
        {errors.password && (
          <Text style={{color: 'red', paddingHorizontal: 15, marginTop: 5}}>
            {errors.password.message}
          </Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Share"
          color="#737500"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
