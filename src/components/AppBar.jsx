import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.primary,
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 5
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.text}>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;