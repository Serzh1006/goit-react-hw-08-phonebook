import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { selectContacts } from 'redux/selectors';
import { updateContactUser } from '../../servises/contactsApi/updateContactsApi';
import { messageObj } from '../../helpers/settings';
import css from './update.module.css';

const UpdateContact = () => {
  const dispatch = useDispatch();
  const dataContacts = useSelector(selectContacts);

  const initialsValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(9).max(13).required(),
  });

  const onUpdateForm = (values, { resetForm }) => {
    const findObj = dataContacts.find(contact => contact.name === values.name);
    if (findObj !== undefined) {
      const data = {
        id: findObj.id,
        contact: values,
      };
      dispatch(updateContactUser(data));
      resetForm();
      return;
    } else {
      toast.error('Contact not found', messageObj);
      resetForm();
    }
  };
  return (
    <Formik
      initialValues={initialsValues}
      validationSchema={schema}
      onSubmit={onUpdateForm}
    >
      <Form className={css.formPhonebook}>
        <label className={css.label}>
          Name
          <Field
            as={Input}
            className={css.input}
            type="text"
            name="name"
            autoComplete="off"
          />
        </label>

        <ErrorMessage
          className={css.nameErrorMessage}
          component="div"
          name="name"
        />

        <label className={css.label}>
          Number
          <Field
            as={Input}
            className={css.input}
            type="tel"
            name="number"
            autoComplete="off"
          />
        </label>
        <ErrorMessage
          className={css.numberErrorMessage}
          component="div"
          name="number"
        />

        <Button className={css.btnSubmit} type="submit" colorScheme="green">
          Update Contact
        </Button>
      </Form>
    </Formik>
  );
};

export default UpdateContact;
