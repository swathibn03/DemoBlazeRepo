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
        await this.name.fill(name)
    }
    async enterCountry(country){
       await this.country.fill(country)
    }
    async enterCity(city){
        await expect(this.city).toBeVisible()
        await expect(this.city).toBeEnabled()
        await this.city.fill(city)
    }
    async enterCreditCard(creditcard){
        await expect(this.creditcard).toBeVisible();
        await expect(this.creditcard).toBeEnabled();
        await this.creditcard.fill(creditcard)
    }
    async enterMonth(month){
        await expect(this.month).toBeVisible();
        await expect(this.month).toBeEnabled();
        await this.month.fill(month)
    }
    async enterYear(year){
        await expect(this.year).toBeVisible();
        await expect(this.year).toBeEnabled();
        await this.year.fill(year)
    }

    async clickPurchaseBtn()
    {
        await expect(this.purchasebtn).toBeVisible()
        await expect(this.purchasebtn).toBeEnabled()
        await this.purchasebtn.click()
    }
    async clickOKButton(){
        await expect(this.okbtn).toBeVisible()
        await expect(this.okbtn).toBeEnabled()
        await this.okbtn.click()
    }
}