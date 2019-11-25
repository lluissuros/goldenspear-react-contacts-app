import axios from "axios";

const BASE_URL = "https://www.fake.com/";
const MOCK_USER = "goldspear";
const MOCK_PASSWORD = "password";

export function postLoginMock(userName, password) {
  return new Promise((resolve, reject) => {
    if (userName === MOCK_USER && password === MOCK_PASSWORD) {
      resolve({ tocken: "myMockToken" });
    } else {
      reject(
        new Error(
          "for mocked auth, use user: 'goldspear' and password: 'password' "
        )
      );
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
