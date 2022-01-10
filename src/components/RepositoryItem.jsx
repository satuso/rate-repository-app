import React from 'react';
import { Text } from 'react-native';
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
  return (
    <>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>forksCount: {forksCount}</Text>
      <Text>stargazersCount: {stargazersCount}</Text>
      <Text>ratingAverage: {ratingAverage}</Text>
      <Text>reviewCount: {reviewCount}</Text>
      <Text>ownerAvatarUrl: {ownerAvatarUrl}</Text>
    </>
  );
};
export default RepositoryItem;