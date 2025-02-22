import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import styles from "./App.module.css";

const App = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            {loading && <p>Loading...</p>}
            {error && <p className={styles.error}>Error: {error}</p>}
            <ContactList />
        </div>
    );
};

export default App;
