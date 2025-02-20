import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name.toLowerCase());

    const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    return (
        <ul className={styles.list}>
            {visibleContacts.map(contact => (
                <li className={styles.item} key={contact.id}>
                    <Contact {...contact} />
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
