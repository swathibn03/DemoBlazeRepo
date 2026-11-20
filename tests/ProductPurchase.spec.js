import {test,expect} from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { ProductPage } from '../pages/ProductPage'
import { LoginPage } from '../pages/LoginPage'
import { CartPage } from '../pages/CartPage'
import validlogin from '../utils/ValidLoginData.json'
import selectphoneitem from '../utils/PhoneItems.json'
import selectmonitorsItem from '../utils/MonitorItems.json'
import cartdetails from '../utils/CartDetails.json'

test('Add random item to cart and verify cart popup',async({page})=>{

    test.setTimeout(60000)
    const loginpage=new LoginPage(page)
    const homepage=new HomePage(page)
    const productpage=new ProductPage(page)
    const cartpage=new CartPage(page)

    await loginpage.openApplication()
    console.log('Application opened...')
   
    await loginpage.clickLoginLink()
    console.log("Clicked on login link")
  
    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
    await loginpage.clickLoginBtn()

    await homepage.selectSamsungGalaxyS6()
    console.log("Selected Samsung Galaxy S6 item")

    let alertmsg
    page.on('dialog',async dialog=>{
        console.log("Alert pop up opened....")
        expect(dialog.message()).toBe('Product added.')
        await dialog.accept()
        alertmsg=dialog.message()

    })
    
    await productpage.clickAddToCartBtn()
    console.log("Clicked on Add To Cart button")
    console.log("Alert popup message on adding item to cart is ",alertmsg)
    expect(alertmsg).toBe('Product added.')
    console.log("Item added to cart successfully")
})

test('Purchase phone item',async ({page})=>{
    test.setTimeout(60000)
    const loginpage=new LoginPage(page)
    const homepage=new HomePage(page)
    const productpage=new ProductPage(page)
    const cartpage=new CartPage(page)

    await loginpage.openApplication()
    console.log("Application opened successfully")
    await loginpage.clickLoginLink()
    console.log("Clicked on login link")

    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
    console.log("Entered login credentials for user ",validlogin[0].username)
    await loginpage.clickLoginBtn()

    await loginpage.verifyLogin(validlogin[0].username);

    await homepage.clickPhoneCategoryLink()
    await homepage.selectPhoneItem(selectphoneitem[0].name)
    console.log("Selected phone item ",selectphoneitem[0].name)

    const dialogPromise = page.waitForEvent('dialog')
    await productpage.clickAddToCartBtn()
    const dialog = await dialogPromise
    const alertmsg = dialog.message()
    console.log('Alert message:', alertmsg)
    expect(alertmsg).toBe('Product added.')
    await dialog.accept()
    console.log('Product added to cart successfully')

    await cartpage.clickCartLink()
    console.log("Clicked Cart link")
    
    await cartpage.clickPlaceOrderBtn()
    await cartpage.enterName(cartdetails[0].name)
    console.log("Entered name ",cartdetails[0].name)

    await cartpage.enterCountry(cartdetails[0].country)
    console.log("Entered country ",cartdetails[0].country)

    await cartpage.enterCity(cartdetails[0].city)
    console.log("Entered city ",cartdetails[0].city)

    await cartpage.enterCreditCard(cartdetails[0].creditcard)
    console.log("Entered credit card no ",cartdetails[0].creditcard)

    await cartpage.enterMonth(cartdetails[0].month)
    console.log("Entered month ",cartdetails[0].month)

    await cartpage.enterYear(cartdetails[0].year)
    console.log("Entered year ",cartdetails[0].year)

    await cartpage.clickPurchaseBtn()
    console.log("Clicked on Purchase button")
    await expect(cartpage.confirmpurchasemsg).toBeVisible();
    console.log("Confirmation message is ", await cartpage.confirmpurchasemsg.textContent())
    await expect(cartpage.confirmpurchasemsg).toContainText('Thank you for your purchase!');

    await cartpage.clickOKButton()
    console.log("Order placed successfully!!!")    
})

test('Purchase monitor item',async ({page})=>{
    test.setTimeout(60000)
    const loginpage=new LoginPage(page)
    const homepage=new HomePage(page)
    const productpage=new ProductPage(page)
    const cartpage=new CartPage(page)

    await loginpage.openApplication()
    console.log("Application opened successfully")
    await loginpage.clickLoginLink()
    console.log("Clicked on login link")

    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
    console.log("Entered login credentials for user ",validlogin[0].username)
    
    await loginpage.clickLoginBtn()
    console.log("Clicked on login button")

    await homepage.clickMonitorsCategoryLink()
    await homepage.selectMonitorsItem(selectmonitorsItem[0].name)
    console.log("Selected monitor item ",selectmonitorsItem[0].name)
    
    const dialogPromise = page.waitForEvent('dialog')
    await productpage.clickAddToCartBtn()
    const dialog = await dialogPromise
    console.log('Alert message:', dialog.message())
    expect(dialog.message()).toBe('Product added.')
    await dialog.accept()
    console.log('Product added to cart successfully')

    await cartpage.clickCartLink()
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
    console.log("Cart is opened..")

    await cartpage.clickPlaceOrderBtn()
     await cartpage.enterName(cartdetails[0].name)
    console.log("Entered name ",cartdetails[0].name)

    await cartpage.enterCountry(cartdetails[0].country)
    console.log("Entered country ",cartdetails[0].country)
    
    await cartpage.enterCity(cartdetails[0].city)
    console.log("Entered city ",cartdetails[0].city)
    
    await cartpage.enterCreditCard(cartdetails[0].creditcard)
    console.log("Entered credit card no ",cartdetails[0].creditcard)

    await cartpage.enterMonth(cartdetails[0].month)
    console.log("Entered month ",cartdetails[0].month)
    
    await cartpage.enterYear(cartdetails[0].year)
    console.log("Entered year ",cartdetails[0].year)
   
    await cartpage.clickPurchaseBtn()
    console.log("Clicked on Purchase button")
    await expect(cartpage.confirmpurchasemsg).toBeVisible();
    console.log("Confirmation message is ", await cartpage.confirmpurchasemsg.textContent())
    await expect(cartpage.confirmpurchasemsg).toContainText('Thank you for your purchase!');

    await cartpage.clickOKButton()
    console.log("Order placed successfully!!!")    
})