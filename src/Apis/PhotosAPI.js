const photosApi = "https://jsonplaceholder.typicode.com";

let token = localStorage.token;


const headers = {
  Accept: "application/json",
};

/**
 * gets pre defined limit of albums from start to limit
 * @param {number} albumId  the id of the album
 * @param {number} start  start of the retrieved albums list
 * @param {number} limit  end of the retrieved albums list
 * @returns set of albums data from start to the limit
 */
export const get = (albumId,start, limit) =>
  fetch(`${photosApi}/photos?albumId=${albumId}&_start=${start}&_limit=${limit}`, { headers })
    .then((res) => res.json())
    .then((data) => data);

