import React from 'react'
import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <div >
            <ul  className={css.contactList}>
                {Array.isArray(contacts) && contacts.map((contact) => {
                    return <Contact
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={onDeleteContact} />;
                })
                }
            </ul>
        </div>
    )
}

export default ContactList