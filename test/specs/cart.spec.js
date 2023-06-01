const CartScreen = require('../pageObject/CartScreen')
const ProductScreen = require('../pageObject/ProductScreen')
const HomeScreen = require('../pageObject/HomeScreen')
const LoginScreen = require('../pageObject/LoginScreen')



describe('ADD TO CART STORY', () => {

    describe('open app, then login, then add product to cart', () => {

        it('should navigate to cart screen and showing cart list', async() => {

            await HomeScreen.openNavbar()
            await HomeScreen.clickLoginNav()
            await LoginScreen.login('bob@example.com', '10203040')
            await HomeScreen.productImg.click()
            await ProductScreen.addToCart()
            await ProductScreen.cartIconClick.click()

            await expect(CartScreen.cartPage).toBeExisting()
            await expect(CartScreen.cartList).toBeExisting()
        })
    })
})