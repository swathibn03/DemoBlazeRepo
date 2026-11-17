import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import validlogin from '../utils/ValidLoginData.json'
import selectphoneitem from '../utils/PhoneItems.json'
import cartdetails from '../utils/CartDetails.json'

test('Purchase phone item',async ({page})=>{
    test.setTimeout(60000)
    const loginpage=new LoginPage(page)
    const homepage=new HomePage(page)
    const productpage=new ProductPage(page)
    const cartpage=new CartPage(page)

    await loginpage.openApplication()
    await loginpage.clickLoginLink()
    await page.waitForTimeout(3000)

    await expect(loginpage.loginusername).toBeVisible();
    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
    await page.waitForTimeout(3000)
    await loginpage.clickLoginBtn()

    await homepage.clickPhoneCategoryLink()
    await homepage.selectPhoneItem(selectphoneitem[0].name)

    let alertmsg
    page.on('dialog',async dialog=>{
        console.log("Alert pop up opened....")
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
        alertmsg=dialog.message()
        console.log(dialog.message())

    })

    await productpage.clickAddToCartBtn()
    await page.waitForTimeout(3000)
    console.log("Alert message on adding item to cart is ",alertmsg)
    console.log("Product added to cart successfully..")

    //await page.waitForLoadState('load')
    await page.waitForTimeout(3000)
    await cartpage.clickCartLink()
    console.log("Clicked Cart link")
    
    await page.waitForTimeout(6000)
    await expect(cartpage.placeorderbtn).isVisible()
    await cartpage.clickPlaceOrderBtn()
  //  await page.waitForTimeout(3000)

    await cartpage.enterName(cartdetails[0].name)
    console.log(cartdetails[0].name)
    await cartpage.enterCountry(cartdetails[0].country)
    await cartpage.enterCity(cartdetails[0].city)
    await cartpage.enterCreditCard(cartdetails[0].creditcard)
    await cartpage.enterMonth(cartdetails[0].month)
    await cartpage.enterYear(cartdetails[0].year)
    await page.waitForTimeout(3000)
    await cartpage.clickPurchaseBtn()
    await page.waitForTimeout(3000)

    let purchaseconfirmmsg=await cartpage.confirmpurchasemsg.innerText()
    console.log(purchaseconfirmmsg)
    expect(purchaseconfirmmsg).toContain('Thank you for your purchase!')

    await cartpage.clickOKButton()
    console.log("Order placed successfully!!!")    
})