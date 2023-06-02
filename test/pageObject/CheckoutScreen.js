class CheckoutScreen {

    // checkout screen 1
    get title () { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get checkoutPage () {return $('//android.widget.ScrollView[@content-desc="checkout address screen"]/android.view.ViewGroup')}
    // form
    get fullNameform () { return $('~Full Name* input field')}
    get address1form () { return $('~Address Line 1* input field')}
    get address2form () { return $('~Address Line 2 input field')}
    get cityForm () { return $('~City* input field')}
    get regionForm () { return $('~State/Region input field')}
    get zipCodeForm () { return $('~Zip Code* input field')}
    get countryForm () { return $('~Country* input field')}
    get paymentBtn () { return $('~To Payment button')}
    // error msg form
    get errorFullname () { return $('//android.view.ViewGroup[@content-desc="Full Name*-error-message"]/android.widget.TextView')}
    get errorAddress1 () { return $('//android.view.ViewGroup[@content-desc="Address Line 1*-error-message"]/android.widget.TextView')}
    get errorCity () { return $('//android.view.ViewGroup[@content-desc="City*-error-message"]/android.widget.TextView')}
    get errorZipCode () { return $('//android.view.ViewGroup[@content-desc="Zip Code*-error-message"]/android.widget.TextView')}
    get errorCountry () { return $('//android.view.ViewGroup[@content-desc="Country*-error-message"]/android.widget.TextView')}

    // checkout screen 2
    get paymentScreen () { return $('~checkout payment screen')}
    

    async checkoutForm(fullname, address1, address2, city, region, zipCode, country) {
        await this.fullNameform.setValue(fullname)
        await this.address1form.setValue(address1)
        await this.address2form.setValue(address2)
       
        // scroll down
        const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Country*"))`
        const bottomEl = $(`android=${bottomElementSelector}`)
        await bottomEl.click()

        await this.cityForm.setValue(city)
        await this.regionForm.setValue(region)
        await this.zipCodeForm.setValue(zipCode)
        await this.countryForm.setValue(country)

        await this.paymentBtn.click()
    }

}


module.exports = new CheckoutScreen()