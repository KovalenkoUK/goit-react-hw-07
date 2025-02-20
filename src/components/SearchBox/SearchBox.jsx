import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);

    return (
        <div>
            <p className={styles.p}>Search by name</p>
            <input
                type="text"
                className={styles.input}
                value={filter}
                onChange={(e) => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
};

export default SearchBox;
