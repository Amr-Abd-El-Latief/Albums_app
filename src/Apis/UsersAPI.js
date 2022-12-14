const usersApi = "https://jsonplaceholder.typicode.com";

const headers = {
  Accept: "application/json"
 
};


    /**
 * gets All the users 
  * @returns all the users data
 */
export const getAll = () =>
  fetch(`${usersApi}/users`, { headers })
    .then((res) => res.json())
    .then((data) => data);
