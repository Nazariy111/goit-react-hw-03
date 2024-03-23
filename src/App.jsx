import { useState, useEffect, useId } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import { nanoid } from 'nanoid'


const contactsStart = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



function App() {
  const [contacts, setContacts] = useState(() => {

    const stringifiedContacts = localStorage.getItem('contacts');
    
    if(!stringifiedContacts || JSON.parse(stringifiedContacts).length === 0) return contactsStart;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });


  useEffect(() => { 
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const onAddContact = (formData) => {
    const finalContact = { ...formData, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, finalContact]);
  };

  const onDeleteContact = (contactId) => { 
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const onChangeFilter = (event) => { 
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  )
}

export default App
