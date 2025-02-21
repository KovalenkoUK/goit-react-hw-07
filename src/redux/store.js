import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["items"],
};

const rootReducer = combineReducers({
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: filtersReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);
