import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const contacts = [
  {id: 1, name: 'Kunal'},
  {id: 2, name: 'Nishant'},
  {id: 3, name: 'Gaurav'},
  {id: 4, name: 'Prateek'},
];

const ContactSelection = ({route}) => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const navigation = useNavigation();
  const {groupName} = route.params;

  const toggleContactSelection = id => {
    setSelectedContacts(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(contactId => contactId !== id)
        : [...prevSelected, id],
    );
  };

  const handleCreateGroup = () => {
    const selectedNames = contacts
      .filter(contact => selectedContacts.includes(contact.id))
      .map(contact => contact.name);
    navigation.navigate('GroupDetail', {
      groupName,
      selectedContacts: selectedNames,
    });
  };

  return (
    <View style={styles.container}>
      {contacts.map(contact => (
        <CheckBox
          key={contact.id}
          title={contact.name}
          checked={selectedContacts.includes(contact.id)}
          onPress={() => toggleContactSelection(contact.id)}
        />
      ))}
      <Button title="Create Group" onPress={handleCreateGroup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ContactSelection;
