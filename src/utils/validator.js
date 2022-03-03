export const validateLoginForm = (email, password) => {
  return validateEmail(email) && validatePasssword(password);
};

export const validateRegisterForm = (email, password, username) => {
  return (
    validateEmail(email) &&
    validatePasssword(password) &&
    validateUsername(username)
  );
};

export const validateEmail = (email) => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
};

const validatePasssword = (password) => {
  return password.length > 5;
};

const validateUsername = (username) => {
  return username.length > 2;
};
