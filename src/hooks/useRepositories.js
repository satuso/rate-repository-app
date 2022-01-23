import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ variables }) => {
  const [repositories, setRepositories] = useState();

  const { data, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  const fetchRepositories = async () => {
    if (data) setRepositories(data.repositories);
  };

  useEffect(() => {
    if (data) fetchRepositories();
  }, [data]);

  return { repositories, loading, fetchRepositories, fetchMore: handleFetchMore };
};

export default useRepositories;