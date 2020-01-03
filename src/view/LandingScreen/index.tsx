import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface LandingProps {}

const Landing = () => {
  return (
    <View style={styles.container}>
      <Text>Landing Screen Hey</Text>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});
