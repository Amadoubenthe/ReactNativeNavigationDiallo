import {View, Text} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
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

export default Home;
