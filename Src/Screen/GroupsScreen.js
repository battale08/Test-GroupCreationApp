import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import RBSheet from 'react-native-raw-bottom-sheet';
import GroupCreationSheet from './GroupCreationSheet';
import {ADD_GROUP} from '../../asset/Images';

const GroupsScreen = ({navigation}) => {
  const name = useSelector(state => state?.user?.name);
  const sheetRef = useRef(null);

  const handleCreateGroup = groupName => {
    console.log('Group created:', groupName);
    sheetRef.current.close();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={ADD_GROUP} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={styles.name}>Welcome, {name}!</Text>
      <Button title="Create Group" onPress={() => sheetRef.current.open()} />
      <RBSheet
        ref={sheetRef}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          },
        }}>
        <GroupCreationSheet
          onCreateGroup={handleCreateGroup}
          navigation={navigation}
        />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  image: {
    width: 30,
    height: 30,
  },
  name: {
    marginVertical: 20,
    fontSize: 18,
  },
});

export default GroupsScreen;
