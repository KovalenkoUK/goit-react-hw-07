import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    number: Yup.string().required("Phone number is required"),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(addContact(values));
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched }) => (
                <Form className={styles.form}>
                    <Field className={styles.input} type="text" name="name" placeholder="Enter name" />
                    {errors.name && touched.name && <div className={styles.error}>{errors.name}</div>}
                    <Field className={styles.input} type="text" name="number" placeholder="Enter phone" />
                    {errors.number && touched.number && <div className={styles.error}>{errors.number}</div>}
                    <button type="submit" className={styles.button}>Add Contact</button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
