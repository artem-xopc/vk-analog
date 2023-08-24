import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  website: "",
};

export const update = createAsyncThunk("user/update", async () => {
  try {

  } catch (error) {
    throw new Error(`Ошибка при входе пользователя: ${error}`);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => (state.name = action.payload),
    setUsername: (state, action) => (state.username = action.payload),
    setWebsite: (state, action) => (state.website = action.payload),
  },
});

export const { setName } = userSlice.actions;
export const { setUsername } = userSlice.actions;
export const { setWebsite } = userSlice.actions;

export default userSlice.reducer;
