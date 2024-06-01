import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GroupDetailsScreen = ({route}) => {
  const {groupName, selectedContacts} = route?.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Group Name: {groupName}</Text>
      <Text style={styles.subtitle}>Members:</Text>
      {selectedContacts.map((contact, index) => (
        <Text key={index} style={styles.contact}>
          {contact}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 6,
  },
  contact: {
    fontSize: 16,
    marginVertical: 2,
  },
});

export default GroupDetailsScreen;
