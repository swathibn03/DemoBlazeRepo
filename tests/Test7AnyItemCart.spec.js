import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { LoginPage } from '../pages/LoginPage'
import validlogin from '../utils/ValidLoginData.json'

test('Add random item to cart and verify popup',async({page})=>{
    const loginpage=new LoginPage(page)
    const homepage=new HomePage(page)
    const productpage=new ProductPage(page)

    await loginpage.openApplication()
    await page.waitForTimeout(3000)
    await loginpage.clickLoginLink()
   // await page.waitForTimeout(3000)

    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
    await page.waitForTimeout(3000)
    await loginpage.clickLoginBtn()

    await homepage.randomItemAddTocart()
    console.log("Randon item added to cart")
   // await page.waitForTimeout(3000)

    let alertmsg
    page.on('dialog',async dialog=>{
        console.log("Alert pop up opened....")
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
        alertmsg=dialog.message()

    })
    await productpage.clickAddToCartBtn()
    await page.waitForTimeout(3000)
    console.log("Clicked on Add To Cart button")
    console.log("Alert popup message on adding item to cart is ",alertmsg)
})