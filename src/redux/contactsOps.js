import { configureStore, combineReducers, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "nanoid";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async () => {
        const response = await axios.get("/api/contacts");
        return response.data;
    }
);

export const addNewContact = createAsyncThunk(
    "contacts/addNewContact",
    async (newContact) => {
        const response = await axios.post("/api/contacts", newContact);
        return response.data;
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId) => {
        await axios.delete(`/api/contacts/${contactId}`);
        return contactId;
    }
);

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addNewContact.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(contact => contact.id !== action.payload);
            });
    }
});

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});