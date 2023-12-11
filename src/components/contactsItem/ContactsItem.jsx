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
      <div className={css.buttonsDelUp}>
        <ModalUpdateContact id={id} nameValue={name} numberValue={number} />
        <button
          className={css.btnDelete}
          onClick={() => dispatch(deleteContactUser(id))}
          type="button"
        >
          <DeleteIcon color={'red'} boxSize={6} />
        </button>
      </div>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
