import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import UpdateContact from 'components/updateContact/UpdateContact';
import { addNewContactsToDB } from 'servises/contactsApi/addContactsApi';
import { selectContacts } from 'redux/selectors';
import { messageObj } from '../../helpers/settings';
import css from './phonebook.module.css';

const PhoneBook = () => {
  const dataContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const initialsValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().min(9).max(13).required(),
  });

  const onSubmitForm = (values, { resetForm }) => {
    const findName = dataContacts.find(contact => contact.name === values.name);
    if (findName !== undefined) {
      toast.error(`${findName.name} is already in contacts`, messageObj);
      resetForm();
      return;
    } else {
      dispatch(addNewContactsToDB(values));
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialsValues}
        validationSchema={schema}
        onSubmit={onSubmitForm}
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

          <Button className={css.btnSubmit} type="submit" colorScheme="blue">
            Add Contact
          </Button>
        </Form>
      </Formik>

      <UpdateContact />
    </>
  );
};

export default PhoneBook;
