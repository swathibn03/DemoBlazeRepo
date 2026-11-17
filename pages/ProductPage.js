export class ProductPage{
    constructor(page){
        this.page=page
        this.addToCartBtn=page.locator('//a[text()="Add to cart"]')
    }

    async clickAddToCartBtn(){
        await this.addToCartBtn.click()
    }
}