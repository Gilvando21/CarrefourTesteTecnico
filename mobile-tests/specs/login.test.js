
const loginPage = require("../pages/login.page")
const users = require("../data/loginData.json")

describe("Login tests",()=>{

users.forEach(data=>{

it(`Login attempt ${data.user}`,async()=>{

await loginPage.loginUser(data.user,data.password)

})

})

})
