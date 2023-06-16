import React, { useContext, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import useChatMessages, { WebSocketMessage } from '../../hooks/api/useChatMessages';
import { UserContext } from '../../../App';

type Message = {
  sender: string;
  content: string;
};

const ChatScreen: React.FC = () => {
  const { userData } = useContext(UserContext);

  const [messages, setMessages] = useState<Message[]>([]);
  const sendMessage = useChatMessages('ws://192.168.100.24:3012', (message: WebSocketMessage) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });

  const handleSendMessage = (content: string) => {
    const message: Message = {
      sender: userData._id,
      content,
    };
    sendMessage(message);
  };

  return (
    <View style={{flex:1, backgroundColor: 'black'}}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Chat Application</Text>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>{item.sender}:</Text> {item.content}
            </Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
      />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 5, marginTop: 10 }}
        placeholder="Type a message"
        onChangeText={(text) => handleSendMessage(text)}
      />
    </View>
  );
};

export default ChatScreen;
