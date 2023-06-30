import {View, Text, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
};

export default Profile;
