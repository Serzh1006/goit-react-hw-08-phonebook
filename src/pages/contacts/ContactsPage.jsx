import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Contacts from '../../components/contacts/Contacts';
import Filter from '../../components/filter/Filter';
import Loader from '../../components/loader/Loader';
import PhoneBook from '../../components/phonebook/Phonebook';
import { selectContacts, selectLoading } from 'redux/selectors';
import { fetchContacts } from '../../servises/fetchContactsApi';
import css from '../../components/app.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const contactsFromState = useSelector(selectContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.phoneBook}>Phonebook</h2>
      <PhoneBook />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {contactsFromState.length !== 0 && <Contacts />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ContactsPage;
