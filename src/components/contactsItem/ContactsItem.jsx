import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContactUser } from '../../servises/deleteContactApi';
import css from './contacts.module.css';

const ContactsItem = ({ id, nameUser, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactsItem}>
      {nameUser}: {number}
      <button
        className={css.btnDelete}
        onClick={() => dispatch(deleteContactUser(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  nameUser: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
