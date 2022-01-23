import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async ({ username, password }) => {
    try {
      const data = await mutate({ variables: { username, password }});
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return [createUser, result];
};

export default useSignUp;