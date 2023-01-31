import { getLoginData } from "./API-check";


/* Get Login */
export const getLogin = async (inputData) => {

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




