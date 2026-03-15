
const request = require("supertest")
const { BASE_URL } = require("../auth/auth")

function getUsers(){
 return request(BASE_URL).get("/usuarios")
}

function createUser(data,token){
 return request(BASE_URL)
  .post("/usuarios")
  .set("Authorization",token)
  .send(data)
}

function getUserById(id){
 return request(BASE_URL).get(`/usuarios/${id}`)
}

function deleteUser(id){
 return request(BASE_URL).delete(`/usuarios/${id}`)
}

module.exports={
 getUsers,
 createUser,
 getUserById,
 deleteUser
}
