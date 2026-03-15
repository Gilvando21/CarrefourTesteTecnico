
const request = require("supertest")

const BASE_URL = "https://serverest.dev"

async function getToken(){
  const res = await request(BASE_URL)
    .post("/login")
    .send({
      email:"admin@admin.com",
      password:"admin"
    })

  return res.body.authorization
}

module.exports = { BASE_URL, getToken }
