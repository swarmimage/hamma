// utils/auth.js

const DUMMY_USER = {
  username: "user",
  password: "123456",
};

export const login = (username, password) => {
  if (
    username === DUMMY_USER.username &&
    password === DUMMY_USER.password
  ) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};
