import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ variables }) => {
  const [repositories, setRepositories] = useState();

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const fetchRepositories = async () => {
    if (data) setRepositories(data.repositories);
  };

  useEffect(() => {
    if (data) fetchRepositories();
  }, [data]);

  return { repositories, loading, fetchRepositories };
};

export default useRepositories;