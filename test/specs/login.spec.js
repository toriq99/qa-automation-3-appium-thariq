const HomeScreen = require('../pageObject/HomeScreen')
const LoginScreen = require('../pageObject/LoginScreen')


describe('LOGIN STORY', () => {

    it('should navigate to login screen', async() => {

        await HomeScreen.openNavbar()
        await HomeScreen.clickLoginNav()

        await expect(LoginScreen.loginTitle).toHaveTextContaining("Login")
    })

    it('successfully login with valid username & password', async() => {

        await LoginScreen.login('bob@example.com', '10203040')

        await expect(HomeScreen.title).toBeExisting()
    })
})

describe('LOGOUT STORY', () => {

    it('successfully logged out', async() => {

        await HomeScreen.openNavbar()
        await HomeScreen.logout()

        expect(HomeScreen.flashAlert).toHaveTextContaining("You are successfully logged out.")
    })
})