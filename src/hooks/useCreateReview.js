import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async values => {
    try {
      const { data } = await mutate({ variables: { input: values }});
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return [createReview, result ];
};

export default useCreateReview;