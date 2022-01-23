import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: theme.colors.bg,
    display: 'flex',
    alignItems: 'flex-start',
    paddingRight: 10,
    flexWrap: 'wrap',
    fontFamily: theme.fonts.fontFamily
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 8,
    fontFamily: theme.fonts.fontFamily
  },
  button: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.bg,
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    fontFamily: theme.fonts.fontFamily
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 10,
    flexShrink: 1
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  endRow: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  text: {
    fontFamily: theme.fonts.fontFamily
  }
});

const RepositoryItem = ({ item }) => {
  const formatNumber = (num) => {
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } 
    return num;
  };

  return (
    <View testID='repositoryItem' style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.img}
          source={{
            uri: item.ownerAvatarUrl}}
        />
      <View style={styles.column}>
        <Text style={styles.bold}>{item.fullName}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.button}>{item.language}</Text>
      </View>
      </View>
        <View style={styles.endRow}>
        <View style={styles.column}>
            <Text style={styles.bold}>{formatNumber(item.stargazersCount)}</Text>
            <Text style={styles.text}>Stars</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{formatNumber(item.forksCount)}</Text>
            <Text style={styles.text}>Forks</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{item.reviewCount}</Text>
            <Text style={styles.text}>Reviews</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{item.ratingAverage}</Text>
            <Text style={styles.text}>Rating</Text>
          </View>
      </View>
    </View>
  );
};
export default RepositoryItem;