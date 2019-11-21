import axios from "axios";

const BASE_URL = "https://www.fake.com/";

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
