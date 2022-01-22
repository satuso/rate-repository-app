import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepositoryItem from './SingleRepositoryItem';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'whitesmoke'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/:id" exact>
          <SingleRepositoryItem />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;