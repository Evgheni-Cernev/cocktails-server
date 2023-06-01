
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import useLoginQuery from '../../hooks/api/useLoginQuery';

const AccountScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLoginQuery();

  const handleLogin = () => {
    loginMutation.mutate({ email, password });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default AccountScreen;