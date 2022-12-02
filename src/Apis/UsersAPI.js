const usersApi = "https://jsonplaceholder.typicode.com";

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token,
};


    /**
 * gets All the users 
  * @returns all the users data
 */
export const getAll = () =>
  fetch(`${usersApi}/users`, { headers })
    .then((res) => res.json())
    .then((data) => data);
