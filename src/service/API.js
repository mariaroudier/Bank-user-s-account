import { getLoginData, getLoginFetchData, saveProfilData } from "./API-check";


// Login
export const getLogin = async (inputData) => {
      console.log(inputData)
      const fetchResponse = await fetch("http://localhost:3001/api/v1/user/login", {
            body: JSON.stringify(inputData),
            headers: {
                  "Content-Type": "application/json",
            },
            method: "POST"
      })
            .then((response) => response.json());
      // console.clear();
      return getLoginData(fetchResponse);
}

// Authorization
export const loginFetch = async (token) => {
      const URL_API = "http://localhost:3001/api/v1/user/profile";

      const fetchResponse = await fetch(URL_API, {
            headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer" + token
            },
            method: "POST"
      }).then((response) => response.json());
      console.log(fetchResponse)
      return getLoginFetchData(fetchResponse);
}

// Save the new name
export const saveProfil = async (token, fullName) => {
      const URL_API = "http://localhost:3001/api/v1/user/profile";

      const saveProfilResponse = await fetch(URL_API, {
            body: JSON.stringify(fullName),
            headers: {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer" + token
            },
            method: "PUT"
      }).then((response) => response.json());

      // console.clear();
      return saveProfilData(saveProfilResponse);
}


