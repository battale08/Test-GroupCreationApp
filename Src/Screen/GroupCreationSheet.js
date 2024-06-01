import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GroupCreationSheet = () => {
  const [groupName, setGroupName] = useState('');
  const navigation = useNavigation();

  const handleSelectContacts = () => {
    navigation.navigate('Contacts', {groupName});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Group</Text>
      <TextInput
        style={styles.input}
        placeholder="Group Name"
        value={groupName}
        onChangeText={setGroupName}
      />
      <Button title="Select Contacts" onPress={handleSelectContacts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default GroupCreationSheet;
