import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = ({ filter, setFilter }) => {

  const onChangeSearch = query => setFilter(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={filter}
    />
  );
};

export default MyComponent;