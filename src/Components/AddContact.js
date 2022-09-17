import { useState } from "react";
import "./AddContact.css";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all filds are mandatori!");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
  };
  return (
    <form onSubmit={submitForm}>
        <div className="formControl">
          <label>name</label>
          <input
            type="text"
            value={contact.name}
            name="name"
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            type="text"
            value={contact.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
