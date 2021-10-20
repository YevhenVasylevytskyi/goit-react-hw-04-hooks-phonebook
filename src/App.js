import React from 'react';
import { Component } from 'react';
import Container from './components/Container/Container';
import Section from './components/Section/Section';
import FormAddContact from './components/FormAddContact/FormAddContact';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Fliter/Filter';

class App extends Component {
  state = {
    contacts: [
      //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = data => {
    // console.log(data);
    this.setState(prevState => {
      if (
        prevState.contacts.some(contact => contact.name.includes(data.name))
      ) {
        return alert(`${data.name} is already in contacts!`);
      }

      return { contacts: [...prevState.contacts, data] };
    });
  };

  deleteContact = currentId => {
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts.filter(contact => contact.id !== currentId),
        ],
      };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLocaleLowerCase() });
  };

  onFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    // console.log(contacts);
    // console.log(parsedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Обновились контакты');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    // console.log(prevProps);
    // console.log(this.state);
  }

  // handleNameChange = event => {
  //   this.setState({ name: event.currentTarget.value });
  // };

  // handleNumberChange = event => {
  //   this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.addContact} />

          {/* <h3>Name</h3>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />           */}
        </Section>

        <Section title="Contacts">
          <Filter
            filter={this.state.filter}
            onChangeFilter={this.changeFilter}
          />
          {this.state.filter === '' ? (
            <ContactsList
              contacts={this.state.contacts}
              deleteContact={this.deleteContact}
            />
          ) : (
            <ContactsList
              contacts={this.onFilter()}
              deleteContact={this.deleteContact}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
