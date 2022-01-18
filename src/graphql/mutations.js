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