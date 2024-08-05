import React from 'react';
import ContactTable from '../components/tables/ContactTable';
import ContactForm from '../components/forms/ContactForm';

const Contacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm />
      <ContactTable />
    </div>
  );
};

export default Contacts;
