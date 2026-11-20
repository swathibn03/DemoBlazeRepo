# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductPurchase.spec.js >> Purchase phone item
- Location: tests\ProductPurchase.spec.js:46:1

# Error details

```
ReferenceError: CartPage is not defined
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test'
  2   | import { HomePage } from '../pages/HomePage'
  3   | import { ProductPage } from '../pages/ProductPage'
  4   | import { LoginPage } from '../pages/LoginPage'
  5   | import validlogin from '../utils/ValidLoginData.json'
  6   | import selectphoneitem from '../utils/PhoneItems.json'
  7   | import selectmonitorsItem from '../utils/MonitorItems.json'
  8   | import cartdetails from '../utils/CartDetails.json'
  9   | 
  10  | test('Add random item to cart and verify popup',async({page})=>{
  11  | 
  12  |     test.setTimeout(60000)
  13  |     const loginpage=new LoginPage(page)
  14  |     const homepage=new HomePage(page)
  15  |     const productpage=new ProductPage(page)
  16  | 
  17  |     await loginpage.openApplication()
  18  |     console.log('Application opened...')
  19  |    
  20  |     await loginpage.clickLoginLink()
  21  |     console.log("Clicked on login link")
  22  |   
  23  |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  24  |     await loginpage.clickLoginBtn()
  25  | 
  26  |     await homepage.selectSamsungGalaxyS6()
  27  |     console.log("Selected Samsung Galaxy S6 item")
  28  | 
  29  |     let alertmsg
  30  |     page.on('dialog',async dialog=>{
  31  |         console.log("Alert pop up opened....")
  32  |         expect(dialog.message()).toBe('Product added.')
  33  |         await dialog.accept()
  34  |         alertmsg=dialog.message()
  35  | 
  36  |     })
  37  |     
  38  |     await productpage.clickAddToCartBtn()
  39  |     await page.waitForTimeout(3000)
  40  |     console.log("Clicked on Add To Cart button")
  41  |     console.log("Alert popup message on adding item to cart is ",alertmsg)
  42  |     expect(alertmsg).toBe('Product added.')
  43  |     console.log("Item added to cart successfully")
  44  | })
  45  | 
  46  | test('Purchase phone item',async ({page})=>{
  47  |     test.setTimeout(60000)
  48  |     const loginpage=new LoginPage(page)
  49  |     const homepage=new HomePage(page)
  50  |     const productpage=new ProductPage(page)
> 51  |     const cartpage=new CartPage(page)
      |                    ^ ReferenceError: CartPage is not defined
  52  | 
  53  |     await loginpage.openApplication()
  54  |     console.log("Application opened successfully")
  55  |     await loginpage.clickLoginLink()
  56  |     console.log("Clicked on login link")
  57  |     await page.waitForTimeout(3000)
  58  | 
  59  |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  60  |     console.log("Entered login credentials for user ",validlogin[0].username)
  61  |     //await page.waitForTimeout(3000)
  62  |     await loginpage.clickLoginBtn()
  63  | 
  64  |     await loginpage.verifyLogin(validlogin[0].username);
  65  | 
  66  |     await homepage.clickPhoneCategoryLink()
  67  |     await homepage.selectPhoneItem(selectphoneitem[0].name)
  68  |     console.log("Selected phone item ",selectphoneitem[0].name)
  69  | 
  70  |     let alertmsg
  71  |     page.on('dialog',async dialog=>{
  72  |         console.log("Alert pop up opened....")
  73  |         expect(dialog.message()).toBe('Product added.')
  74  |         await dialog.accept()
  75  |         alertmsg=dialog.message()
  76  |         console.log(dialog.message())
  77  | 
  78  |     })
  79  | 
  80  |     await productpage.clickAddToCartBtn()
  81  |     //await page.waitForTimeout(3000)
  82  |     console.log("Alert message on adding item to cart is ",alertmsg)
  83  |     console.log("Product added to cart successfully..")
  84  | 
  85  |     await cartpage.clickCartLink()
  86  |     console.log("Clicked Cart link")
  87  |     
  88  |     expect(cartpage.placeorderbtn).toBeVisible
  89  |     await cartpage.clickPlaceOrderBtn()
  90  | 
  91  |     await expect(cartpage.name).toBeVisible()
  92  |     await cartpage.enterName(cartdetails[0].name)
  93  |     console.log("Entered name ",cartdetails[0].name)
  94  | 
  95  |     await cartpage.enterCountry(cartdetails[0].country)
  96  |     console.log("Entered country ",cartdetails[0].country)
  97  | 
  98  |     await cartpage.enterCity(cartdetails[0].city)
  99  |     console.log("Entered city ",cartdetails[0].city)
  100 | 
  101 |     await cartpage.enterCreditCard(cartdetails[0].creditcard)
  102 |     console.log("Entered credit card no ",cartdetails[0].creditcard)
  103 | 
  104 |     await cartpage.enterMonth(cartdetails[0].month)
  105 |     console.log("Entered month ",cartdetails[0].month)
  106 | 
  107 |     await cartpage.enterYear(cartdetails[0].year)
  108 |     console.log("Entered year ",cartdetails[0].year)
  109 | 
  110 |     await cartpage.clickPurchaseBtn()
  111 |     await expect(cartpage.confirmpurchasemsg).toBeVisible();
  112 |     await expect(cartpage.confirmpurchasemsg).toContainText('Thank you for your purchase!');
  113 | 
  114 |     await cartpage.clickOKButton()
  115 |     console.log("Order placed successfully!!!")    
  116 | })
  117 | 
  118 | test('Purchase monitor item',async ({page})=>{
  119 |     test.setTimeout(60000)
  120 |     const loginpage=new LoginPage(page)
  121 |     const homepage=new HomePage(page)
  122 |     const productpage=new ProductPage(page)
  123 |     const cartpage=new CartPage(page)
  124 | 
  125 |     await loginpage.openApplication()
  126 |     console.log("Application opened successfully")
  127 |     await loginpage.clickLoginLink()
  128 |     console.log("Clicked on login link")
  129 |     //await page.waitForTimeout(3000)
  130 | 
  131 |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  132 |     console.log("Entered login credentials for user ",validlogin[0].username)
  133 |     
  134 |     await loginpage.clickLoginBtn()
  135 |     console.log("Clicked on login button")
  136 | 
  137 |     await homepage.clickMonitorsCategoryLink()
  138 |     await homepage.selectMonitorsItem(selectmonitorsItem[0].name)
  139 |     console.log("Selected monitor item ",selectmonitorsItem[0].name)
  140 |     
  141 |     const dialogPromise = page.waitForEvent('dialog')
  142 |     await productpage.clickAddToCartBtn()
  143 |     const dialog = await dialogPromise
  144 |     console.log('Alert message:', dialog.message())
  145 |     expect(dialog.message()).toBe('Product added.')
  146 |     await dialog.accept()
  147 |     console.log('Product added to cart successfully')
  148 | 
  149 |     await cartpage.clickCartLink()
  150 |     await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
  151 |     console.log("Cart is opened..")
```