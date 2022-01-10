import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: '10px',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    flexWrap: 'wrap',
    paddingRight: 10
  },
  description: {
    color: 'gray',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    width: '100%'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 8,
  },
  language: {
    backgroundColor: theme.colors.secondary,
    color: 'white',
    padding: 5,
    borderRadius: 5,
    marginTop: 10
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 10,
    paddingBottom: 10
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
  }
});


const RepositoryItem = ({ 
  fullName,
  description,
  language,
  forksCount,
  stargazersCount, 
  ratingAverage,
  reviewCount,
  ownerAvatarUrl
}) => {

  const formatNumber = (num) => {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    } 
    return num;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.img}
          source={{
            uri: ownerAvatarUrl}}
        />
      <View style={styles.column}>
        <Text style={styles.bold}>{fullName}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
      </View>
        <View style={styles.endRow}>
        <View style={styles.column}>
            <Text style={styles.bold}>{formatNumber(stargazersCount)}</Text>
            <Text>Stars</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{formatNumber(forksCount)}</Text>
            <Text>Forks</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{reviewCount}</Text>
            <Text>Reviews</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bold}>{ratingAverage}</Text>
            <Text>Rating</Text>
          </View>
      </View>
    </View>
  );
};
export default RepositoryItem;