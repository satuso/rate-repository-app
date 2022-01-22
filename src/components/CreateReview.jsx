import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import * as yup from 'yup';
import theme from '../theme';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import useCreateReview from '../hooks/useCreateReview';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
  repositoryName: yup
    .string(`Repository's name is required`)
    .required(),
  ownerName: yup
    .string()
    .required(`Repository owner's username is required`),
  rating: yup
    .number()
    .min(0, 'Rating must be a number between 0 and 100')
    .max(100, 'Rating must be a number between 0 and 100')
    .required('Rating is required'),
  text: yup
    .string()
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

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='repositoryName' placeholder='repositoryName' />
      <FormikTextInput name='ownerName' placeholder='ownerName' />
      <FormikTextInput name='rating' placeholder='rating' />
      <FormikTextInput name='text' placeholder='text' multiline numberOfLines={4}/>
    <Pressable onPress={onSubmit} style={styles.button}>
      <Text style={styles.text}>Create a review</Text>
    </Pressable>
    </View>
  );
};

export const CreateReviewContainer = ({ onSubmit }) => {
  const initialValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: ''
  };

  return (
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} /> }
      </Formik>
  );
};

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    const ratingNumber = Number(rating);
    try {
      const data = await createReview({ repositoryName, ownerName, rating: ratingNumber, text });
      history.push(`/${data.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CreateReviewContainer onSubmit={onSubmit} />
  );
};

export default CreateReview;