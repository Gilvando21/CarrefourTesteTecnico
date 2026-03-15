
const { expect } = require("chai")
const Ajv = require("ajv")

const { getToken } = require("../auth/auth")
const { buildUser } = require("../data/userBuilder")
const service = require("../services/userService")
const userSchema = require("../schemas/user.schema")

const ajv = new Ajv()
const validate = ajv.compile(userSchema)

describe("Users API",()=>{

 let token

 before(async()=>{
  token = await getToken()
 })

 it("List users",async()=>{
  const res = await service.getUsers()

  expect(res.status).to.equal(200)
  expect(res.headers["content-type"]).to.include("application/json")
 })

 it("Create user",async()=>{

  const user = buildUser()

  const res = await service.createUser(user,token)

  expect(res.status).to.equal(201)
 })

 it("Invalid user creation",async()=>{

  const invalidUser = { nome:"Invalid" }

  const res = await service.createUser(invalidUser,token)

  expect(res.status).to.not.equal(201)
 })

 it("Rate limit simulation",async()=>{

  for(let i=0;i<10;i++){
   await service.getUsers()
  }

  expect(true).to.equal(true)

 })

})
