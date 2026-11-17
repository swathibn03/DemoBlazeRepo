import {expect} from '@playwright/test'
export class CartPage{
    constructor(page){
        this.page=page
        this.cartlink=page.locator('#cartur')
        this.placeorderbtn=page.locator('//button[text()="Place Order"]')

        this.name=page.locator('#name')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.creditcard=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')

        this.purchasebtn=page.locator('//button[text()="Purchase"]')
        this.confirmpurchasemsg=page.locator('//h2[text()="Thank you for your purchase!"]')
        this.okbtn=page.locator('//button[text()="OK"]')

    }

    async clickCartLink(){
        await expect(this.cartlink).toBeVisible()
        await this.cartlink.click()
    }

    async clickPlaceOrderBtn(){
        await expect(this.placeorderbtn).toBeVisible();
        await this.placeorderbtn.click()
    }

    async enterName(name){
        this.name.fill(name)
    }
    async enterCountry(country){
        this.country.fill(country)
    }
    async enterCity(city){
        this.city.fill(city)
    }
    async enterCreditCard(creditcard){
        this.creditcard.fill(creditcard)
    }
    async enterMonth(month){
        this.month.fill(month)
    }
    async enterYear(year){
        this.year.fill(year)
    }

    async clickPurchaseBtn()
    {
        await this.purchasebtn.click()
    }
    async clickOKButton(){
        await this.okbtn.click()
    }
}