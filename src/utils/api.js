import mockUsers from "./mockUsers";

const BASE_URL = "http://localhost:3001";
const LOGIN_URL = `${BASE_URL}/users/login`;
const SIGNUP_URL = `${BASE_URL}/users/signup`;
const CONTACTS_URL = `${BASE_URL}/constacts`;

export function login(username, password) {
  // Get a token from api server using the fetch api
  return makeAuthenticatedRequest(LOGIN_URL, null, {
    method: "POST",
    body: JSON.stringify({
      username,
      password
    })
  });
}

function makeAuthenticatedRequest(url, token, options) {
  // performs api calls sending the required authentication headers
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

  // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
  if (token) {
    headers["Authorization"] = "Bearer " + token;
  }

  return fetch(url, {
    headers,
    ...options
  })
    .then(checkStatus)
    .then(response => response.json());
}

function checkStatus(response) {
  console.log("check status", response);
  // raises an error in case response status is not a success
  if (response.status >= 200 && response.status < 300) {
    // Success status lies between 200 to 300
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

export function getUsersMock(tocken) {
  // TODO: right now, only check if we have token or not, later backend would check
  return new Promise((resolve, reject) => {
    if (tocken) {
      resolve({
        json: () => {
          return mockUsers;
        }
      });
    } else {
      reject("No token provided");
    }
  });
}
