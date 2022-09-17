import "./ContactList.css";
import userImage from "../Assets/Images/userImage.png";
const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <section className="contactList">
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="item">
            <img src={userImage} alt="user"></img>
            <div className="detail">
              <p>{contact.name} </p>
              <p>{contact.email}</p>
            </div>
            <button onClick={() => deleteHandler(contact.id)}>delete</button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
