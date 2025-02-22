import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul className={styles.list}>


            {contacts.map(contact => (
                <li className={styles.item} key={contact.id}>
                    <Contact {...contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
