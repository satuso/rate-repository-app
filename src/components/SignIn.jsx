import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must include at least 2 letters')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must include at least 6 letters')
    .required('Password is required'),
});

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
      display: 'flex',
      alignItems: 'center'
    },
    text: {
      color: 'white',
      fontFamily: theme.fonts.fontFamily
    }
  });
  
  return (
    <View>
    <FormikTextInput name='username' placeholder='username' />
    <FormikTextInput name='password' placeholder='password' secureTextEntry/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.text}>Sign In</Text>
    </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
  };

  return (
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleSubmit }) => <SignInForm onSubmit={handleSubmit}/> }
      </Formik>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <SignInContainer onSubmit={onSubmit}/>
  );
};

export default SignIn;