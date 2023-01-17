const url = 'http://localhost:2000/users';
const user = {
  name:'Alfredo Manuel',
  birthYear:1998
}

function getUsers(){
  axios.get(url)
  .then(response=>{
  const data = response.data;
  resultApi.textContent = JSON.stringify(data);
  })
  .catch(err=>{
    console.log(err)
  })
}
//getUsers();

function getOneUser(){
  axios.get(`${url}/acb84c`)
  .then(response=>{
    const data = response.data;
    resultApi.textContent =JSON.stringify(data)
  })
  .catch(err=>{
    console.log(err)
  })
}
getOneUser();

function addNewUser(){
  axios.post(url,user)
  .then(response=>{
    console.log(response)
  })
  .catch(err=>{
    console.log(err)
  })
}
//addNewUser();

function updateUser(){
  axios.put(`${url}/fb8080`,user)
  .then(response=>{
    console.log(response)
  })
  .catch(err=>{
    console.log(err)
  })
}
//updateUser();

function deleteUser(){
axios.delete(`${url}/fb8080`)
.then(response=>{
  console.log(response)
})
.catch(err=>{
  console.log(err)
})
}
//deleteUser();