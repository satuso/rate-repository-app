import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      // Add your test code here
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories}/>
      );

      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      const formatNumber = (num) => {
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        } 
        return num;
      };

      expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.fullName);
      expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.fullName);

      expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.description);
      expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.description);

      expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.language);
      expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.language);

      expect(firstRepositoryItem).toHaveTextContent(formatNumber(repositories.edges[0].node.forksCount));
      expect(secondRepositoryItem).toHaveTextContent(formatNumber(repositories.edges[1].node.forksCount));

      expect(firstRepositoryItem).toHaveTextContent(formatNumber(repositories.edges[0].node.stargazersCount));
      expect(secondRepositoryItem).toHaveTextContent(formatNumber(repositories.edges[1].node.stargazersCount));

      expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.ratingAverage);
      expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.ratingAverage);

      expect(firstRepositoryItem).toHaveTextContent(repositories.edges[0].node.reviewCount);
      expect(secondRepositoryItem).toHaveTextContent(repositories.edges[1].node.reviewCount);
    });
  });
});