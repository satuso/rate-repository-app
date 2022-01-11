import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid gray',
    padding: 10,
    margin: 10
  }
});

const TextInput = ({...props }) => {
  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;