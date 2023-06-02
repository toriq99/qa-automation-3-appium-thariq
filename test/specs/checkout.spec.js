const CartScreen = require('../pageObject/CartScreen')
const ProductScreen = require('../pageObject/ProductScreen')
const HomeScreen = require('../pageObject/HomeScreen')
const LoginScreen = require('../pageObject/LoginScreen')
const CheckoutScreen = require('../pageObject/CheckoutScreen')



describe('CHECKOUT STORY', () => {

    describe('checkout with empty order form', () => {

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

        it('showing error messages in form', async() => {

            await CheckoutScreen.paymentBtn.click()

            expect(CheckoutScreen.errorFullname).toHaveTextContaining('Please provide your full name.')
            expect(CheckoutScreen.errorAddress1).toHaveTextContaining('Please provide your address.')
            expect(CheckoutScreen.errorCity).toHaveTextContaining('Please provide your city.')
            expect(CheckoutScreen.errorZipCode).toHaveTextContaining('Please provide your zip code.')
            expect(CheckoutScreen.errorCountry).toHaveTextContaining('Please provide your country.')
        })
    })

    describe('filling form with valid value', () => {

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

        it.skip('navigate to review checkout page', async() => {

            
        })

        it.skip('checkout success', async() => {

            
        })
    })
})