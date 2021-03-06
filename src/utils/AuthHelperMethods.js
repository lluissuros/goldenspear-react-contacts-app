import decode from "jwt-decode";

export function isLoggedIn() {
  // Checks if there is a saved token and it's still valid
  const token = getToken();

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
    console.warn("expired check failed! Logging out for security");
    logout();
    return false;
  }
}

export function setToken(token, rememberMe) {
  if (rememberMe) {
    localStorage.setItem("jwt_token", token);
  } else {
    sessionStorage.setItem("jwt_token", token);
    localStorage.removeItem("jwt_token");
  }
}

export function getToken() {
  return (
    sessionStorage.getItem("jwt_token") || localStorage.getItem("jwt_token")
  );
}

export function logout() {
  // Clear user token and profile data from storage
  sessionStorage.removeItem("jwt_token");
  localStorage.removeItem("jwt_token");
}

export function getConfirm() {
  // Using jwt-decode npm package to decode the token
  const token = getToken();
  return !!token && decode(getToken());
}
