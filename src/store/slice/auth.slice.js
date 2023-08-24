import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

// Симуляция запроса на сервер для авторизации
const loginRequest = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "test@gmail.com" && password === "123") {
        console.log("Вы в системе!");
        resolve({ token: "abcd1234" });
      } else {
        reject(new Error("Неправильно указана электронная почта или пароль"));
      }
    }, 1000);
  });
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await loginRequest(email, password);
      const token = response.token;
      localStorage.setItem("auth", "true");
      Cookies.set("token", token);
      return token;
    } catch (error) {
      throw new Error(`Ошибка при входе пользователя: ${error}`);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  // Здесь можно выполнять запрос на сервер для разлогинивания пользователя
});

// export const logoutRequest = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Вы не в системе");
//       resolve({ token: "" });
//     }, 1000);
//   });
// };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: {
      isAuth: false,
      email: "",
      password: "",
      token: Cookies.get("token") || null,
    },
  },
  reducers: {
    setIsAuth: (state, action) => (state.user.isAuth = action.payload),
    setEmail: (state, action) => (state.user.email = action.payload),
    setPassword: (state, action) => (state.user.password = action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuth = true;
        state.token = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.token = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setIsAuth } = authSlice.actions;
export const { setEmail } = authSlice.actions;
export const { setPassword } = authSlice.actions;

export default authSlice.reducer;
