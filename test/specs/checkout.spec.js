const CartScreen = require('../pageObject/CartScreen')
const ProductScreen = require('../pageObject/ProductScreen')
const HomeScreen = require('../pageObject/HomeScreen')
const LoginScreen = require('../pageObject/LoginScreen')
const CheckoutScreen = require('../pageObject/CheckoutScreen')



describe('CHECKOUT STORY', () => {

    describe('proceed to checkout and filling form with valid value', () => {

        it('should navigate to checkout screen', async() => {

            // login first
            await HomeScreen.openNavbar()
            await HomeScreen.clickLoginNav()
            await LoginScreen.login('bob@example.com', '10203040')

            // adding product to cart and proccess checout
            await HomeScreen.productImg.click()
            await ProductScreen.addToCart()
            await ProductScreen.cartIconClick.click()
            await CartScreen.checkout() 

            // expect navigate to checkout screen screen and showing checkout product list
            await expect(CheckoutScreen.checkoutPage).toBeExisting()
        })

        it('navigate to payment form', async() => {

            await CheckoutScreen.checkoutForm(
                fullname = 'Tanjiro Kamado', 
                address1 = 'Mandorley 112', 
                address2 = 'Entrance 1', 
                city = 'Truro', 
                region = 'Cornwall', 
                zipCode = '89750',
                country = 'United Kingdom'
            )

            expect(CheckoutScreen.paymentScreen).toBeExisting()
        })

        it.skip('navigate to review checout page', async() => {

            
        })

        it.skip('checkout success', async() => {

            
        })
    })

    describe.skip('checkout with empty order form', () => {

        it('should navigate to checkout screen', async() => {

            // login first
            await HomeScreen.openNavbar()
            await HomeScreen.clickLoginNav()
            await LoginScreen.login('bob@example.com', '10203040')

            // adding product to cart and proccess checout
            await HomeScreen.productImg.click()
            await ProductScreen.addToCart()
            await ProductScreen.cartIconClick.click()
            await CartScreen.checkout() 

            // expect navigate to checkout screen screen and showing checkout product list
            await expect(CheckoutScreen.checkoutPage).toBeExisting()
        })

        it('navigate to payment form', async() => {

            await CheckoutScreen.checkoutForm(
                fullname = 'Tanjiro Kamado', 
                address1 = 'Mandorley 112', 
                address2 = 'Entrance 1', 
                city = 'Truro', 
                region = 'Cornwall', 
                zipCode = '89750',
                country = 'United Kingdom'
            )

            expect(CheckoutScreen.paymentScreen).toBeExisting()
        })

        it('navigate to review checout page', async() => {

            
        })

        it('checkout success', async() => {

            
        })
    })
})