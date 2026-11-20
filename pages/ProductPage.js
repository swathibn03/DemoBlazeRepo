import { expect } from "@playwright/test";
export class ProductPage{
    constructor(page){
        this.page=page
       // this.addToCartBtn = page.getByRole('link', { name: 'Add to cart' })
        this.addToCartBtn=page.locator('//a[text()="Add to cart"]')
    }

    async clickAddToCartBtn(){
        await expect(this.addToCartBtn).toBeVisible()
        await this.addToCartBtn.click()
    }
}