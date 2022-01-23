import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from 'react-router-native';
import MenuComponent from './MenuComponent';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  top: {
    marginTop: 50,
    zIndex: 1,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const history = useHistory();

  return (
    <View style={styles.top}>

    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => 
        <Pressable onPress={() => history.push(item.id)}>
          <RepositoryItem item={item}/>
        </Pressable>}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const RepositoryList = () => {
  const [sort, setSort] = useState();
  const variables = { ...sort };
  const { repositories } = useRepositories({ variables });

  console.log(variables);
  return (
    <>
      <MenuComponent setSort={setSort} />
      <RepositoryListContainer
        repositories={repositories}
        setSort={setSort}
      />
    </>
  );
};

export default RepositoryList;