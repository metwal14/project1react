import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //for adding the contact
  const addContactHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  //for removing the contact
  const removeContactHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact?.id !== id);
    setContacts(filteredContacts);
  };

  //fetching the current list after refreshing the page
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts && retrieveContacts?.length !== 0) {
      setContacts(retrieveContacts);
    }
  }, []);

  //storing the contacts to local storage for future fetching
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            Component={() => (
              <ContactList
                removeContactHandler={removeContactHandler}
                s
                contacts={contacts}
              />
            )}
          />
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
        </Routes>

        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList
          removeContactHandler={removeContactHandler}
          s
          contacts={contacts}
        /> */}
      </Router>
    </div>
  );
}

export default App;
