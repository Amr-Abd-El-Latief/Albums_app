const albumsApi = "https://jsonplaceholder.typicode.com";


const headers = {
  Accept: "application/json"
 
};

/**
 * gets pre defined limit of albums from start to limit
 * @param {number} start  start of the retrieved albums list
 * @param {number} limit  end of the retrieved albums list
 * @returns set of albums data from start to the limit
 */
export const get = (start, limit) =>
  fetch(`${albumsApi}/albums?_start=${start}&_limit=${limit}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

    /**
 * gets All the albums 
  * @returns all the albums data
 */
export const getAll = () =>
  fetch(`${albumsApi}/albums`, { headers })
    .then((res) => res.json())
    .then((data) => data);
