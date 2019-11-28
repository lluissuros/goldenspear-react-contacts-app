import axios from "axios";
import mockUsers from "./mockUsers";

const BASE_URL = "https://www.fake.com/";
const MOCK_USER = "golden";
const MOCK_PASSWORD = "pass";

export function postLoginMock(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === MOCK_USER && password === MOCK_PASSWORD) {
      resolve({ tocken: "myMockToken" });
    } else {
      reject(
        new Error(
          `for mocked auth, use user: ${MOCK_USER} and password: ${MOCK_PASSWORD}`
        )
      );
    }
  });
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

export function postLogin(userName, password) {
  axios
    .post(`${BASE_URL}/auth/login`, {
      userName,
      password
    })
    .then(result => {
      if (result.status === 200) {
        return result;
      } else {
        throw new Error(getErrorMsg(userName));
      }
    })
    .catch(e => {
      throw new Error(getErrorMsg(userName, `error message was ${e}`));
    });
}

function getErrorMsg(username, otherInfo = "") {
  return `${username} doesn't exist ${otherInfo}`;
}
