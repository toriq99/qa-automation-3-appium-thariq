const CartScreen = require('../pageObject/CartScreen')
const ProducScreen = require('../pageObject/ProductScreen')


describe('ADD TO CART STORY', () => {

    describe('opening cart screen', () => {

        it('should navigate to cart screen and showing cart list', async() => {

            await ProducScreen.cartIcon.click()

            await expect(CartScreen.cartPage).toBeExisting()
        })
    })
})