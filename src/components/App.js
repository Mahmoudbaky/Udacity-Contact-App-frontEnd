import { useState, useEffect } from "react";
import "../css/App.css";
import ListContacts from "./ListContacts";
import CreateContact from "./CreateContact";
import * as ContactsAPI from "../utils/ContactsAPI";
import { Route, Routes } from "react-router-dom";

// making an api call to get the contacts is a side effect

const App = () => {
  const removeContact = (contact) => {
    ContactsAPI.remove(contact);

    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route path="/create" element={<CreateContact />} />
    </Routes>
  );
};

export default App;
