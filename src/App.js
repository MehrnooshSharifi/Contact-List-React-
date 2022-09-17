import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactList from "./Components/ContactList";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteHandler = (id) => {
    console.log(id);
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </main>
  );
}

export default App;
