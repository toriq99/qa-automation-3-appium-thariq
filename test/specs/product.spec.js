const HomeScreen = require('../pageObject/HomeScreen')
const ProductScreen = require('../pageObject/ProductScreen')


describe('Filter product descending', () => {

    it('should sort product by descending name', async() => {

        await ProductScreen.filterOption.click()
        await ProductScreen.descProduct.click()

        function isListDescending(list) {
            for (let i = 0; i < list.length - 1; i++) {
              if (list[i] < list[i + 1]) {
                return false;
              }
            }
            return true;
        }
          
        const listElements = $$('//android.widget.TextView[@content-desc="store item text"]')
        const listText = listElements.map(element => element.getText())
        const isDescending = isListDescending(listText)
        
        await expect(isDescending).toBe(true)
    })
})

describe('Filter product ascending', () => {

    it('should sort product by ascending name', async() => {

        await ProductScreen.filterOption.click()
        await ProductScreen.ascProduct.click()

        function isListAscending(list) {
            for (let i = 0; i < list.length - 1; i++) {
              if (list[i] > list[i + 1]) {
                return false;
              }
            }
            return true;
        }
          
        const listElements = $$('//android.widget.TextView[@content-desc="store item text"]')
        const listText = listElements.map(element => element.getText())
        const isAscending = isListAscending(listText)
        
        await expect(isAscending).toBe(true)
    })
})

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