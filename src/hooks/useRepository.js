import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ variables }) => {
  const [repository, setRepository] = useState();
    const { data, loading, fetchMore } = useQuery(GET_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables,
    });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data && data.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }
  
    fetchMore({
      query: GET_REPOSITORY,
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      }  
    });
  };

  const fetchRepository = async () => {
    if (data) setRepository(data.repository);
  };

  useEffect(() => {
    if (data) fetchRepository();
  }, [data]);

    return { repository, loading, fetchRepository, fetchMore: handleFetchMore };
};

export default useRepository;