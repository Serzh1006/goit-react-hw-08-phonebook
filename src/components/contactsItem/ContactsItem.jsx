import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { DeleteIcon } from '@chakra-ui/icons';
import { deleteContactUser } from '../../servises/contactsApi/deleteContactApi';
import ModalUpdateContact from 'components/modalUpdateContact/ModalUpdateContact';
import css from './contacts.module.css';

const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactsItem}>
      <div className={css.contactInfo}>
        <p className={css.nameContact}>{name}</p>
        <p className={css.numberContact}>{number}</p>
      </div>

      <button
        className={css.btnDelete}
        onClick={() => dispatch(deleteContactUser(id))}
        type="button"
      >
        <DeleteIcon color={'red'} boxSize={7} />
      </button>
      <ModalUpdateContact name={name} number={number} />
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
