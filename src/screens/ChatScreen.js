import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { getMessages, insertMessage } from '../services/db';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const loadMessages = async () => {
    const msgs = await getMessages();
    setMessages(msgs);
  };

  const sendMessage = async () => {
    if (!text.trim()) return;
    await insertMessage('me', 'peer', text);
    setText('');
    loadMessages();
  };

  useEffect(() => {
    loadMessages();
    const interval = setInterval(loadMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ marginVertical: 4 }}>
            [{item.fromId}] {item.body}
          </Text>
        )}
      />
      <TextInput
        placeholder="Tape ton message"
        value={text}
        onChangeText={setText}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Envoyer" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
