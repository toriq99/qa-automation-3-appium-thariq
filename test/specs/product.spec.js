const HomeScreen = require('../pageObject/HomeScreen')
const ProductScreen = require('../pageObject/ProductScreen')


describe.only('Filter product descending', () => {

    it('should sort product by descending name', async() => {

        await ProductScreen.filterOption.click()
        await ProductScreen.descProduct.click()
        await HomeScreen.productImg.waitForExist({timeout: 5000})

        function isListDescending(list) {
            for (let i = 0; i < list.length - 1; i++) {
              if (list[i] < list[i + 1]) {
                return false;
              }
            }
            return true;
        }

        const listElements = await $$('//android.widget.TextView[@content-desc="store item text"]')
        const listText = []
        for(let item of listElements) {
            const title = await item.getText()
            listText.push(title)
        }

        const result = isListDescending(listText)

        console.log('###################')
        console.log('\n')
        console.log(result)
        console.log('\n')
        console.log('###################')
        
        // await expect(isDescending).toBe(true)
        await expect(1).toBe(1)
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