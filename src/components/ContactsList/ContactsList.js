import PropTypes from 'prop-types';
import style from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteContact }) => {
  // console.log(contacts);

  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.item} key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <button
              className={style.button}
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactsList;
