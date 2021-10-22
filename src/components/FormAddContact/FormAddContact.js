import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './FormAddContact.module.css';

export default function FormAddContact({ onSubmit }) {
  const loginInputId = shortid.generate();
  const numberInputId = shortid.generate();
  const contactInputId = shortid.generate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: contactInputId,
      name: name,
      number: number,
    };

    onSubmit(contact);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={loginInputId}>
        Name
        <input
          className={style.input}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id={loginInputId}
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={style.label} htmlFor={numberInputId}>
        Namber
        <input
          className={style.input_number}
          type="tel"
          name="number"
          placeholder="Namber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          id={numberInputId}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

FormAddContact.protoType = {
  onSubmit: PropTypes.func,
};

// class FormAddContact extends Component {
//   loginInputId = shortid.generate();
//   numberInputId = shortid.generate();
//   contactInputId = shortid.generate();

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     // console.log(event.currentTarget);
//     // console.log(event.currentTarget.name);
//     // console.log(event.currentTarget.value);

//     this.setState({
//       // [event.currentTarget.name]: event.currentTarget.value,
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     // console.log(this.state);

//     const contact = {
//       id: shortid.generate(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.onSubmit(contact);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form className={style.form} onSubmit={this.handleSubmit}>
//         <label className={style.label} htmlFor={this.loginInputId}>
//           Name
//           <input
//             className={style.input}
//             type="text"
//             name="name"
//             placeholder="Name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             id={this.loginInputId}
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label className={style.label} htmlFor={this.numberInputId}>
//           Namber
//           <input
//             className={style.input_number}
//             type="tel"
//             name="number"
//             placeholder="Namber"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             id={this.numberInputId}
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={style.button} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// FormAddContact.protoType = {
//   onSubmit: PropTypes.func,
// };

// export default FormAddContact;
