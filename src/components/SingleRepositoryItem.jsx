import React from 'react';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    display: 'flex',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.bg
  },
  bg: {
    backgroundColor: theme.colors.bg
  }
});

const SingleRepository = () => {
  const { id } = useParams();
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network'
  });

  if (!data) return null;

  return (
    <View style={styles.bg}>
    <RepositoryItem repository={data.repository} />
    <Pressable style={styles.button} onPress={() => Linking.canOpenURL(`${data.repository.url}`)}>
      <Text style={styles.text}>Open in Github</Text>
    </Pressable>
    </View>
  );
};
export default SingleRepository;