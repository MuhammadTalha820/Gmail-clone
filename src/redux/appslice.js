import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        emails: [],
        selectedEmails: null,
        searchText: null,
        authUser: null
    },
    reducers: {
        setopen: (state, action) => {
            state.open = action.payload;
        },
        setemails: (state, action) => {
            state.emails = action.payload;
        },
        setselectedEmails: (state, action) => {
            state.selectedEmails = action.payload
        },
        setsearchText: (state, action) => {
            state.searchText = action.payload

        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        }
    }
});

export const { setopen, setemails, setselectedEmails, setsearchText, setAuthUser } = appSlice.actions;
export default appSlice.reducer;
