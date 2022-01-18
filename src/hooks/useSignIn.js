import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ( { username, password } ) => {
    const result = await mutate({ variables: { credentials: { username, password }}});
    const { data } = result;
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [ signIn, result ];
};
export default useSignIn;