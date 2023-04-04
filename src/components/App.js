import React, { useState, useEffect } from "react";
import "./App.css";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (newContact) => {
    setContacts([...contacts, { id: uuid(), ...newContact }]);
  };
  const removeContactHandler = () => {};
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts && retrieveContacts?.length !== 0) {
      setContacts(retrieveContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList
        removeContactHandler={removeContactHandler}
        s
        contacts={contacts}
      />
    </div>
  );
}

export default App;
