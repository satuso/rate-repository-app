import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authorize($credentials: AuthorizeInput!){
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!){
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($input: CreateReviewInput) {
    createReview(review: $input) {
      id
      text
      rating
      createdAt
      user {
        id
        username
      }
      repositoryId
    }
  }
`;