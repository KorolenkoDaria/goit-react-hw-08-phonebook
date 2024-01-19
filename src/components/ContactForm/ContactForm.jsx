import { useState } from 'react';
import { Wrapper, Label, Input, Form, Field, Button, H2 } from "./ContactForm.styled";

import { useDispatch, useSelector } from "react-redux";

import { selectContacts } from '../../redux/contacts/contactsSelectors';

import { addContact } from "../../redux/contacts/contactsOperatios";

const ContactForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const handleInputChange = (evt) => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const contactData = {
      name,
      number,
    }

    const addedContacts = contacts.find(contact => contact.name === contactData.name);
    if (addedContacts) {
      return alert(`${contactData.name} is already in contacts!`);
    }

    dispatch(addContact(contactData));

    setName('');
    setNumber('');
  }

  return (
    <Wrapper>
      <H2>Create new contact</H2>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor='user-name'> Name </Label>
          <Input onChange={handleInputChange} value={name} id='user-name' type="text" name="name" placeholder='Name Lastname' required />
        </Field>
        <Field>
          <Label htmlFor='user-phone'> Phone number </Label>
          <Input onChange={handleInputChange} value={number} id='user-phone' type="tel" name="number" placeholder='xxx-xx-xx' required />
        </Field>
        <Button type='submit'>Add contact</Button>
      </Form>
    </Wrapper>
  )
}

export default ContactForm;