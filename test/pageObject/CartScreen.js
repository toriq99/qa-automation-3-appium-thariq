class CartScreen {

    get cartPage () { return $('//android.widget.ScrollView[@content-desc="cart screen"]')}
    get removeBtn () { return $('//android.view.ViewGroup[@content-desc="remove item"]/android.widget.TextView')}
    get checkoutBtn () { return $('//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]/android.widget.TextView')}
    get qty () { return $('//android.view.ViewGroup[@content-desc="counter amount"]/android.widget.TextView')}
    get price () { return $('//android.widget.TextView[@content-desc="total price"]')}


    async removeProduct() {
        await this.removeBtn.click()
    }

    async checkout() {
        await this.checkoutBtn.click()
    }
}


module.exports = new CartScreen()