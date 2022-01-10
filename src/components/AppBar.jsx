import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: '10px',
    backgroundColor: theme.colors.primary,
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <Text style={styles.text}>Repositories</Text>
    </Pressable>
  </View>;
};

export default AppBar;