import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from './Contact.module.css'

const Contact = ({contact, onDeleteContact}) => {
    return (
        <li className={css.contactItem}>
            <ul className={css.contactInfo}>
                <li>
                    <p><FaUser className={css.myIcon} />{contact.name}</p>
                </li>
                <li>
                    <p><FaPhone className={css.myIcon} />{contact.number}</p>
                </li>
            </ul>
            <button
                className={css.contactButton}
                onClick={() => onDeleteContact(contact.id)}
            >Delete</button>
        </li>
    )
}

export default Contact