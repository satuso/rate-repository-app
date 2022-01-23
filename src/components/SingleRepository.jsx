import React from 'react';
import { useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import * as Linking from 'expo-linking';
import theme from '../theme';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 10,
    flexShrink: 1,
    backgroundColor: theme.colors.bg,
    marginBottom: 10,
    marginTop: 10,
    padding: 5
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  rating: {
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    color: theme.colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  ratingText: {
    color: theme.colors.secondary,
    fontSize: 20,
    fontWeight: 'bold'
  },
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
  bold: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },
  date: {
    color: theme.colors.textSecondary,
    fontSize: 16
  },
  bg: {
    backgroundColor: theme.colors.bg
  }
});

const RepositoryInfo = ({ repository }) => {
  return (
    <View style={styles.bg}>
    <RepositoryItem item={repository} />
    <Pressable style={styles.button} onPress={() => Linking.canOpenURL(`${repository.url}`)}>
      <Text style={styles.text}>Open in Github</Text>
    </Pressable>
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const date = review.createdAt.toString().split('T');
  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <View style={styles.rating}><Text style={styles.ratingText}>{review.rating}</Text></View>
        <View>
          <Text style={styles.bold}>{review.user.username}</Text>
          <Text style={styles.date}>{review.createdAt && date[0]}</Text>
        </View>
      </View>
      <Text>{review.text}</Text>
    </View>
  );
};

const SingleRepository = () => {
  const { id } = useParams();
  const repository = useRepository(id);
  const history = useHistory();

  if (!repository) {
    history.push('/');
    return null;
  }

  const reviews = repository.reviews
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};
export default SingleRepository;