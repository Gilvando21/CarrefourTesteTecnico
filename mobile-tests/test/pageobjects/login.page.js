class LoginPage {

get email(){ return $('~input-email') }
get password(){ return $('~input-password') }
get loginButton(){ return $('~button-LOGIN') }

async login(user,pass){
 await this.email.setValue(user)
 await this.password.setValue(pass)
 await this.loginButton.click()
}

}

module.exports = new LoginPage()