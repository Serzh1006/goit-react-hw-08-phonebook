import { useSelector } from 'react-redux';
import ContactsItem from 'components/contactsItem/ContactsItem';
import { visibleContacts } from 'redux/selectors';
import css from './contacts.module.css';

const Contacts = () => {
  const contactsFilters = useSelector(visibleContacts);

  return (
    <section className={css.sectionList}>
      <ul className={css.contactsList}>
        {contactsFilters.map(contact => {
          return (
            <ContactsItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Contacts;
