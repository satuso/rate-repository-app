import React from 'react';
import { StyleSheet, Text} from 'react-native';
import { useField } from 'formik';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: '#d73a4a',
    paddingLeft: 10
  },
  error: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid #d73a4a',
    padding: 10,
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid gray',
    padding: 10,
    margin: 10,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
        style={showError ? styles.error : styles.input}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;