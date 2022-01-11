import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.primary,
    height: '80px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Link to="/">
      <Text style={styles.text}>Repositories</Text>
    </Link>
    <Link to="/signin">
      <Text style={styles.text}>Sign In</Text>
    </Link>
  </View>;
};

export default AppBar;