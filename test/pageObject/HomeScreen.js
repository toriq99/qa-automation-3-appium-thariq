class HomeScreen {

    get navBar () { return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView')}
    get loginNav () { return $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView')}
    get logoutNav () { return $('//android.view.ViewGroup[@content-desc="menu item log out"]/android.widget.TextView')}
    get title () { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get flashAlert () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView')}
    get confirmLogout () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]')}
    get productImg () { return $('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView')}
    get productText () { return $('(//android.widget.TextView[@content-desc="store item text"])[1]')}


    async openNavbar() {
        await this.navBar.click()
    }

    async clickLoginNav() {
        await this.loginNav.click()
    }

    async logout() {
        await this.logoutNav.click()
        await expect(this.flashAlert).toBeExisting()
        await this.confirmLogout.click()
    }

}


module.exports = new HomeScreen()