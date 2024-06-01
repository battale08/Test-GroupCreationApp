//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {setName} from '../../Redux/userSlice';

// create a component
const LoginScreen = ({navigation}) => {
  const [name, setNameInput] = useState('');
  const dispatch = useDispatch();

  const containsSpecialCharsAndNumber = str => {
    const specialCharsAndNumbers = /[1-9`!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;

    const hindiChars = /^[\u0900-\u097F\s]+$/;

    return specialCharsAndNumbers.test(str) || hindiChars.test(str);
  };

  const handleLogin = () => {
    if (name === '') {
      Alert.alert('Error', 'Please enter your Name.');
      return false;
    }
    if (name.length < 3) {
      Alert.alert('Error', 'Name Should have At least 3 Characters.');
      return false;
    }
    if (containsSpecialCharsAndNumber(name)) {
      Alert.alert('Error', 'Enter Valid Name.');
      return false;
    }
    dispatch(setName(name));
    navigation.navigate('Groups');
    setNameInput('');
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setNameInput}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;
