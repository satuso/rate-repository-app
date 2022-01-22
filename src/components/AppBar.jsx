import React, { useContext }  from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { useQuery, useApolloClient } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    backgroundColor: theme.colors.primary,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: theme.fonts.main,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    padding: 10,
    fontFamily: theme.fonts.fontFamily
  },
});

const AppBar = () => {
  const { data } = useQuery(GET_USER, {
    fetchPolicy: 'cache-and-network',
  });

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();
  const history = useHistory();
  
  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/login');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.text}>Repositories</Text>
        </Link>
        {!data?.authorizedUser ? 
        <>
          <Link to="/signin">
            <Text style={styles.text}>Sign In</Text>
          </Link> 
          <Link to="/signup">
            <Text style={styles.text}>Sign Up</Text>
          </Link>
        </> : 
          <Link onPress={handleSignOut}>
            <Text style={styles.text}>Sign Out</Text>
          </Link>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;