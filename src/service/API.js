import { getLoginData, getLoginFetchData } from "./API-check";


/* Login */
export const getLogin = async (inputData) => {
      console.log(inputData)
      const fetchResponse = await fetch("http://localhost:3001/api/v1/user/profile", {
            body: JSON.stringify(inputData),
            headers: {
                  "Content-Type": "application/json",
            },
            method: "POST"
      })
            .then((response) => response.json());
      // console.clear();
      return await getLoginData(fetchResponse);
}

/* Authorization */
export const loginFetch = async (token) => {
      const URL_API = "http://localhost:3001/api/v1/user/profile";

      const fetchResponse = await fetch(URL_API, {
            headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer" + token
            },
            method: "POST"
      }).then((response) => response.json());

      console.clear();
      return await getLoginFetchData(fetchResponse);
}




