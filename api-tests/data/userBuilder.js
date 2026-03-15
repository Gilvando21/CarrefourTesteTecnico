
const { faker } = require("@faker-js/faker")

function buildUser(){
  return {
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: "123456",
    administrador: "true"
  }
}

module.exports = { buildUser }
