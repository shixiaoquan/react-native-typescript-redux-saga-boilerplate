import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

interface DetailProps {}

const Detail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
      <Text style={styles.txt}>Detail</Text>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  txt: {
    fontSize: 80,
    backgroundColor: 'grey',
  },
});
