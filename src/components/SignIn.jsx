import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';

const SignInForm = ({ onSubmit }) => {
  const styles = StyleSheet.create({
    errorText: {
      marginTop: 5,
    },
    button: {
      backgroundColor: theme.colors.secondary,
      padding: 10,
      borderRadius: 5,
      margin: 10,
      textAlign: 'center'
    },
    text: {
      color: 'white'
    }
  });
  
  return (
    <View>
    <FormikTextInput name="username" placeholder="username" />
    <FormikTextInput name="password" placeholder="password" secureTextEntry/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.text}>Sign In</Text>
    </Pressable>
    </View>
  );
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    username: '',
    password: '',
  };

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
      </Formik>
  );
};

export default SignIn;