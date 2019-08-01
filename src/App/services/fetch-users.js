/* 

Create and export a function that requests data from
https://randomuser.me/api?results=10

*/
const ENDPOINT = "https://randomuser.me/api?results=10"

const getRandomUsers = fetch (ENDPOINT)
.then(res => res.json())
.then(data => data.results)
.catch(err => console.log(err));

export default getRandomUsers;