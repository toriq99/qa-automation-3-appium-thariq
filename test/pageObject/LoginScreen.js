class LoginScreen {

    get loginTitle () { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get usernameForm () { return $('~Username input field')}
    get passwordForm () { return $('~Password input field')}
    get loginBtn () { return $('~Login button')}


    async login(username, password) {
        await this.usernameForm.setValue(username)
        await this.passwordForm.setValue(password)
        await this.loginBtn.click()
    }
}


module.exports = new LoginScreen()