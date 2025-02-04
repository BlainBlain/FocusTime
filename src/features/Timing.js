import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/Button';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timing}>
        <RoundedButton title="10" size={75} onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timing}>
        <RoundedButton title="15" size={75} onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timing}>
        <RoundedButton title="20" size={75} onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timing: {
    flex: 1,
    alignItems: 'center',
  },
});
