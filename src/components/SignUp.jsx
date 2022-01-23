import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must have a length between 1 and 30')
    .max(30, 'Username must have a length between 1 and 30')
    .required('Userame is required'),
  password: yup
    .string()
    .min(5, 'Password must have a length between 5 and 50')
    .max(50, 'Password must have a length between 5 and 50')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required')
});

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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='username' />
      <FormikTextInput name='password' placeholder='password' secureTextEntry/>
      <FormikTextInput name='passwordConfirmation' placeholder='password confirmation' secureTextEntry/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.text}>Sign Up</Text>
    </Pressable>
    </View>
  );
};

export const SignUpContainer = ({ onSubmit }) => {
  const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: ''
  };

  return (
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleSubmit }) => <SignUpForm onSubmit={handleSubmit} /> }
      </Formik>
  );
};

const SignUp = () => {
  const [createUser] = useSignUp();
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const response = await createUser({ username, password });
      if (response) {
        await signIn({ username, password });
        history.push('/');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUp;