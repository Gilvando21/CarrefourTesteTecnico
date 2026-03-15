
class LoginPage{

get email(){return $('~input-email')}
get password(){return $('~input-password')}
get login(){return $('~button-LOGIN')}

async loginUser(user,pass){
await this.email.setValue(user)
await this.password.setValue(pass)
await this.login.click()
}

}

module.exports=new LoginPage()
