import decode from "jwt-decode";

export function isLoggedIn() {
  // Checks if there is a saved token and it's still valid
  const token = getToken(); // Getting token from localstorage

  //The double exclamation is a way to cast the variable to a boolean, allowing you to easily check if the token exusts.
  return !!token && !isTokenExpired(token); // handwaiving here
}

function isTokenExpired(token) {
  try {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      // Checking if token is expired.
      return true;
    } else return false;
  } catch (err) {
    console.log("expired check failed!");
    return false;
  }
}

export function setToken(token) {
  // Saves user token to localStorage
  console.warn("TODO at the moment the token is saved in localstorage");
  localStorage.setItem("jwt_token", token);
}

export function getToken() {
  console.warn(
    "TODO at the moment the token is saved in localstorage, also check isTokenExpired"
  );
  // Retrieves the user token from localStorage
  return localStorage.getItem("jwt_token");
}

export function logout() {
  // Clear user token and profile data from localStorage
  localStorage.removeItem("jwt_token");
}

export function getConfirm() {
  // Using jwt-decode npm package to decode the token
  const token = getToken();
  return token ? decode(getToken()) : null;
}
