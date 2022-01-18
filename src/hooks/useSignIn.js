import { useMutation } from "@apollo/client";
import { LOGIN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ( { username, password } ) => {
    console.log({ credentials: { username, password }});
    return await mutate({variables: { credentials: { username, password }}});
  };

  console.log(result);

  return [ signIn, result ];
};
export default useSignIn;