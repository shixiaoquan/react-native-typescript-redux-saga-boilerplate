import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface HomeProps {}

const Me = () => {
  return (
    <View style={styles.container}>
      <Text>Me</Text>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
