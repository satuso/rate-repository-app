import React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

const MenuComponent = ({ setSort }) => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={{zIndex: 100}}>
    <Provider>
      <View
        style={{
          marginTop: 10,
          zIndex: 100,
          position: 'absolute'
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button color='gray'
          onPress={openMenu}>Sort Repositories ↓</Button>}>
          <Menu.Item onPress={() => setSort({ orderBy:'CREATED_AT', orderDirection:'DESC'})} title="Latest repositories" />
          <Divider />
          <Menu.Item onPress={() => setSort({ orderBy:'RATING_AVERAGE', orderDirection:'DESC'})} title="Highest rated repositories" />
          <Divider />
          <Menu.Item onPress={() => setSort({ orderBy:'RATING_AVERAGE', orderDirection:'ASC'})} title="Lowest rated repositories" />
        </Menu>
      </View>
    </Provider>
    </View>
  );
};

export default MenuComponent;