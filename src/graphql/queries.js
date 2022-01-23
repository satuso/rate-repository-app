import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query Repositories($orderBy:AllRepositoriesOrderBy, $orderDirection:OrderDirection, $searchKeyword:String, $first:Int, $after:String){
    repositories(orderBy:$orderBy, orderDirection:$orderDirection, searchKeyword:$searchKeyword, first:$first, after:$after){
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
          url
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    totalCount
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first:Int, $after:String){
    repository(id: $id){
      id
      fullName
      url
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      reviews(first:$first, after:$after){
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
      }
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      }
    }
  }
`;

export const GET_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;