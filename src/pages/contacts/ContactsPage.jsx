import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Contacts from '../../components/contacts';
import Filter from '../../components/filter';
import Loader from '../../components/loader';
import ModalAddContact from 'components/modalAddContact/ModalAddContact';
import { selectContacts, selectLoading, selectLoggedIn } from 'redux/selectors';
import { fetchContacts } from '../../servises/contactsApi/fetchContactsApi';
import css from '../../components/app.module.css';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  const contactsFromState = useSelector(selectContacts);
  const isLoggedin = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedin) return <Navigate to={'/login'} />;

    dispatch(fetchContacts());
  }, [dispatch, isLoggedin]);

  return (
    <div className={css.contactsPage}>
      <h2 className={css.phoneBook}>Phonebook</h2>
      <ModalAddContact />
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
