import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <p>{name}: {number}</p>
            <button className={styles.button} onClick={() => dispatch(deleteContact(id))}>
                Delete
      </button>
        </div>
    );
};

export default Contact;
