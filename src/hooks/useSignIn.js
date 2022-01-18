import { useMutation } from "@apollo/client";
import { LOGIN } from '../graphql/mutations';
import AuthStorage from "../utils/authStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN);

  const signIn = async ( { username, password } ) => {
    console.log({ credentials: { username, password }});

    const result = await mutate({ variables: { credentials: { username, password }}});
    const { data } = result;

    console.log(data.authorize.accessToken);

    await AuthStorage.setAccessToken(data.authorize.accessToken);
    return result;
  };

  return [ signIn, result ];
};
export default useSignIn;