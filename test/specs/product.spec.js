const HomeScreen = require('../pageObject/HomeScreen')
const ProductScreen = require('../pageObject/ProductScreen')


describe('Choosing product', () => {

    it('should be navigate to product detail', async() => {

        await HomeScreen.productImg.click()

        await expect(ProductScreen.title).toBeExisting()
        await expect(ProductScreen.title).toHaveTextContaining("Sauce Labs")
    })
})

describe('Adding to cart', () => {

    it('successfully adding product to cart list', async() => {

        await ProductScreen.addToCart()

        await expect(ProductScreen.cartIcon).toHaveTextContaining("1")
    })
})