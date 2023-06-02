class ProductScreen {

    get title () { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')}
    get productPage () { return $('//android.widget.ScrollView[@content-desc="product screen"]/android.view.ViewGroup')}
    get productImg () { return $('//android.widget.ScrollView[@content-desc="product screen"]/android.view.ViewGroup/android.widget.ImageView')}
    get addToCartBtn () { return $('//android.view.ViewGroup[@content-desc="Add To Cart Button"]/android.widget.TextView')}
    get cartIcon () { return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView')}
    get cartIconClick () { return $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView')}
    get filterOption () { return $('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView')}
    get descProduct () { return $('~nameDesc')}
    get ascProduct () { return $('~nameAsc')}
    get allProdName () { return $$('//android.widget.TextView[@content-desc="store item text"]')}

    
    async addToCart() {
        // scroll page 
        const bottomElementSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Add To Cart"))`
        const bottomEl = $(`android=${bottomElementSelector}`)

        await bottomEl.click()

    }

    async descByName() {
        // get all product name
        const getAllProdName = await $$('//android.widget.TextView[@content-desc="store item text"]').getText()
        
        // sort descending
        await getAllProdName.reverse()

    }
}


module.exports = new ProductScreen()