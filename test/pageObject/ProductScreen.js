class ProductScreen {

    get title () { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get productPage () { return $('//android.widget.ScrollView[@content-desc="product screen"]/android.view.ViewGroup')}
    get productImg () { return $('//android.widget.ScrollView[@content-desc="product screen"]/android.view.ViewGroup/android.widget.ImageView')}
    get addToCartBtn () { return $('//android.view.ViewGroup[@content-desc="Add To Cart Button"]/android.widget.TextView')}
    get cartIcon () { return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView')}
    get cartIconClick () { return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')}

    
    async addToCart() {
        // scroll page 
        const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add To Cart"))`
        const bottomEl = $(`android=${bottomElementSelector}`)

        await bottomEl.click()

    }
}


module.exports = new ProductScreen()