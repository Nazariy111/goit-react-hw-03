import React from 'react'
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import css from './ContactForm.module.css'


const INITIAL_VALUES = { id: "", name: "", number: "" };

const contactSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(3, "This name id too Short!")
        .max(50, "This name is too Long!")
        .required("Sorry! Name is required"),
    number: Yup
        .string()
        .matches(/^\d{3}-\d{2}-\d{2}$/, 'Sorry! The phone number format is XXX-XX-XX')
        .required("Sorry! Phone number is required")
});


const ContactForm = ({ onAddContact }) => {
    
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAddContact(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={handleSubmit}
            validationSchema={contactSchema}>
            <Form className={css.formSection}>
                <label className={css.formLabel} htmlFor={nameFieldId}>Name</label>
                <Field className={css.inputField} type="text" name="name" id={nameFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='name'/>

                <label className={css.formLabel} htmlFor={numberFieldId}>Number</label>
                <Field className={css.inputField} type="tel" name="number" id={numberFieldId} placeholder=""/>
                <ErrorMessage className={css.errorText} component="p" name='number'/>
                <button className={css.formButton} type="submit">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm