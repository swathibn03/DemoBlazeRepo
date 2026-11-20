# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductPurchase.spec.js >> Purchase phone item
- Location: tests\ProductPurchase.spec.js:48:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f3e1]:
  - dialog "Place order" [active] [ref=f3e2]:
    - document [ref=f3e3]:
      - generic [ref=f3e4]:
        - generic [ref=f3e5]:
          - heading "Place order" [level=5] [ref=f3e6]
          - button "Close" [ref=f3e7] [cursor=pointer]: ×
        - generic [ref=f3e9]:
          - generic [ref=f3e10]: "Total: 360"
          - generic [ref=f3e11]:
            - generic [ref=f3e12]: "Name:"
            - 'textbox "Total: 360 Name:" [ref=f3e13]': Swathi
          - generic [ref=f3e14]:
            - generic [ref=f3e15]: "Country:"
            - textbox "Country:" [ref=f3e16]: India
          - generic [ref=f3e17]:
            - generic [ref=f3e18]: "City:"
            - textbox "City:" [ref=f3e19]: Kerala
          - generic [ref=f3e20]:
            - generic [ref=f3e21]: "Credit card:"
            - textbox "Credit card:" [ref=f3e22]: "45678"
          - generic [ref=f3e23]:
            - generic [ref=f3e24]: "Month:"
            - textbox "Month:" [ref=f3e25]: "12"
          - generic [ref=f3e26]:
            - generic [ref=f3e27]: "Year:"
            - textbox "Year:" [ref=f3e28]: "2030"
        - generic [ref=f3e30]:
          - button "Close" [ref=f3e31]
          - button "Purchase" [ref=f3e32]
  - text:             
  - navigation [ref=f3e33]:
    - generic [ref=f3e34]:
      - link "PRODUCT STORE" [ref=f3e35] [cursor=pointer]:
        - /url: index.html
      - list [ref=f3e38]:
        - listitem [ref=f3e39]:
          - link "Home (current)" [ref=f3e40] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=f3e41]: (current)
        - listitem [ref=f3e42]:
          - link "Contact" [ref=f3e43] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e44]:
          - link "About us" [ref=f3e45] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e46]:
          - link "Cart" [ref=f3e47] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=f3e48]:
          - link "Log out" [ref=f3e49] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=f3e50]:
          - link "Welcome Swathi3" [ref=f3e51] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=f3e53]:
    - generic [ref=f3e54]:
      - heading "Products" [level=2] [ref=f3e55]
      - table [ref=f3e57]:
        - rowgroup [ref=f3e58]:
          - row [ref=f3e59]:
            - columnheader "Pic" [ref=f3e60]
            - columnheader "Title" [ref=f3e61]
            - columnheader "Price" [ref=f3e62]
            - columnheader "x" [ref=f3e63]
        - rowgroup [ref=f3e64]:
          - row [ref=f3e65]:
            - cell [ref=f3e66]
            - cell "Samsung galaxy s6" [ref=f3e68]
            - cell "360" [ref=f3e69]
            - cell [ref=f3e70]:
              - link "Delete" [ref=f3e71] [cursor=pointer]:
                - /url: "#"
    - generic [ref=f3e72]:
      - heading "Total" [level=2] [ref=f3e73]
      - heading "360" [level=3] [ref=f3e76]
      - button "Place Order" [ref=f3e77]
  - generic [ref=f3e79]:
    - generic [ref=f3e82]:
      - heading "About Us" [level=4] [ref=f3e83]
      - paragraph [ref=f3e84]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=f3e87]:
      - heading "Get in Touch" [level=4] [ref=f3e88]
      - paragraph [ref=f3e89]: "Address: 2390 El Camino Real"
      - paragraph [ref=f3e90]: "Phone: +440 123456"
      - paragraph [ref=f3e91]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=f3e95]
  - contentinfo [ref=f3e97]:
    - paragraph [ref=f3e98]: Copyright © Product Store
  - generic [ref=f3e101]:
    - heading "Thank you for your purchase!" [level=2] [ref=f3e107]
    - paragraph [ref=f3e108]: "Id: 1046549Amount: 360 USDCard Number: 45678Name: SwathiDate: 20/10/2026"
    - button "OK" [ref=f3e111]
```

# Test source

```ts
  11  | test('Add random item to cart and verify cart popup',async({page})=>{
  12  | 
  13  |     test.setTimeout(60000)
  14  |     const loginpage=new LoginPage(page)
  15  |     const homepage=new HomePage(page)
  16  |     const productpage=new ProductPage(page)
  17  |     const cartpage=new CartPage(page)
  18  | 
  19  |     await loginpage.openApplication()
  20  |     console.log('Application opened...')
  21  |    
  22  |     await loginpage.clickLoginLink()
  23  |     console.log("Clicked on login link")
  24  |   
  25  |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  26  |     await loginpage.clickLoginBtn()
  27  | 
  28  |     await homepage.selectSamsungGalaxyS6()
  29  |     console.log("Selected Samsung Galaxy S6 item")
  30  | 
  31  |     let alertmsg
  32  |     page.on('dialog',async dialog=>{
  33  |         console.log("Alert pop up opened....")
  34  |         expect(dialog.message()).toBe('Product added.')
  35  |         await dialog.accept()
  36  |         alertmsg=dialog.message()
  37  | 
  38  |     })
  39  |     
  40  |     await productpage.clickAddToCartBtn()
  41  |     await page.waitForTimeout(3000)
  42  |     console.log("Clicked on Add To Cart button")
  43  |     console.log("Alert popup message on adding item to cart is ",alertmsg)
  44  |     expect(alertmsg).toBe('Product added.')
  45  |     console.log("Item added to cart successfully")
  46  | })
  47  | 
  48  | test.only('Purchase phone item',async ({page})=>{
  49  |     test.setTimeout(60000)
  50  |     const loginpage=new LoginPage(page)
  51  |     const homepage=new HomePage(page)
  52  |     const productpage=new ProductPage(page)
  53  |     const cartpage=new CartPage(page)
  54  | 
  55  |     await loginpage.openApplication()
  56  |     console.log("Application opened successfully")
  57  |     await loginpage.clickLoginLink()
  58  |     console.log("Clicked on login link")
  59  |     await page.waitForTimeout(3000)
  60  | 
  61  |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  62  |     console.log("Entered login credentials for user ",validlogin[0].username)
  63  |     //await page.waitForTimeout(3000)
  64  |     await loginpage.clickLoginBtn()
  65  | 
  66  |     await loginpage.verifyLogin(validlogin[0].username);
  67  | 
  68  |     await homepage.clickPhoneCategoryLink()
  69  |     await homepage.selectPhoneItem(selectphoneitem[0].name)
  70  |     console.log("Selected phone item ",selectphoneitem[0].name)
  71  | 
  72  |     const dialogPromise = page.waitForEvent('dialog')
  73  |     await productpage.clickAddToCartBtn()
  74  |     const dialog = await dialogPromise
  75  |     const alertmsg = dialog.message()
  76  |     console.log('Alert message:', alertmsg)
  77  |     expect(alertmsg).toBe('Product added.')
  78  |     await dialog.accept()
  79  |     console.log('Product added to cart successfully')
  80  | 
  81  |      await cartpage.clickCartLink()
  82  |     console.log("Clicked Cart link")
  83  |     
  84  |     //expect(cartpage.placeorderbtn).toBeVisible()
  85  |     await cartpage.clickPlaceOrderBtn()
  86  | 
  87  |     //await expect(cartpage.name).toBeVisible()
  88  |     await cartpage.enterName(cartdetails[0].name)
  89  |     console.log("Entered name ",cartdetails[0].name)
  90  | 
  91  |     await cartpage.enterCountry(cartdetails[0].country)
  92  |     console.log("Entered country ",cartdetails[0].country)
  93  | 
  94  |     await cartpage.enterCity(cartdetails[0].city)
  95  |     console.log("Entered city ",cartdetails[0].city)
  96  | 
  97  |     await cartpage.enterCreditCard(cartdetails[0].creditcard)
  98  |     console.log("Entered credit card no ",cartdetails[0].creditcard)
  99  | 
  100 |     await cartpage.enterMonth(cartdetails[0].month)
  101 |     console.log("Entered month ",cartdetails[0].month)
  102 | 
  103 |     await cartpage.enterYear(cartdetails[0].year)
  104 |     console.log("Entered year ",cartdetails[0].year)
  105 | 
  106 |     await cartpage.clickPurchaseBtn()
  107 |     await expect(cartpage.confirmpurchasemsg).toBeVisible();
  108 |     console.log("Confirmation message is ", await cartpage.confirmpurchasemsg.textContent())
  109 |     await expect(cartpage.confirmpurchasemsg).toContainText('Thank you for your purchase!');
  110 | 
> 111 |     await page.waitForTimeout(3000)
      |                ^ Error: page.waitForTimeout: Test timeout of 60000ms exceeded.
  112 |     await cartpage.clickOKButton()
  113 |     console.log("Order placed successfully!!!")    
  114 | })
  115 | 
  116 | test('Purchase monitor item',async ({page})=>{
  117 |     test.setTimeout(60000)
  118 |     const loginpage=new LoginPage(page)
  119 |     const homepage=new HomePage(page)
  120 |     const productpage=new ProductPage(page)
  121 |     const cartpage=new CartPage(page)
  122 | 
  123 |     await loginpage.openApplication()
  124 |     console.log("Application opened successfully")
  125 |     await loginpage.clickLoginLink()
  126 |     console.log("Clicked on login link")
  127 |     //await page.waitForTimeout(3000)
  128 | 
  129 |     await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password) 
  130 |     console.log("Entered login credentials for user ",validlogin[0].username)
  131 |     
  132 |     await loginpage.clickLoginBtn()
  133 |     console.log("Clicked on login button")
  134 | 
  135 |     await homepage.clickMonitorsCategoryLink()
  136 |     await homepage.selectMonitorsItem(selectmonitorsItem[0].name)
  137 |     console.log("Selected monitor item ",selectmonitorsItem[0].name)
  138 |     
  139 |     const dialogPromise = page.waitForEvent('dialog')
  140 |     await productpage.clickAddToCartBtn()
  141 |     const dialog = await dialogPromise
  142 |     console.log('Alert message:', dialog.message())
  143 |     expect(dialog.message()).toBe('Product added.')
  144 |     await dialog.accept()
  145 |     console.log('Product added to cart successfully')
  146 | 
  147 |     await cartpage.clickCartLink()
  148 |     await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')
  149 |     console.log("Cart is opened..")
  150 |    // await page.waitForTimeout(3000)
  151 |     await cartpage.clickPlaceOrderBtn()
  152 |  //   await page.waitForTimeout(3000)
  153 | 
  154 |     await cartpage.enterName(cartdetails[0].name)
  155 |     console.log("Entered name ",cartdetails[0].name)
  156 | 
  157 |     await cartpage.enterCountry(cartdetails[0].country)
  158 |     console.log("Entered country ",cartdetails[0].country)
  159 |     
  160 |     await cartpage.enterCity(cartdetails[0].city)
  161 |     console.log("Entered city ",cartdetails[0].city)
  162 |     
  163 |     await cartpage.enterCreditCard(cartdetails[0].creditcard)
  164 |     console.log("Entered credit card no ",cartdetails[0].creditcard)
  165 | 
  166 |     await cartpage.enterMonth(cartdetails[0].month)
  167 |     console.log("Entered month ",cartdetails[0].month)
  168 |     
  169 |     await cartpage.enterYear(cartdetails[0].year)
  170 |     console.log("Entered year ",cartdetails[0].year)
  171 |    
  172 |     await cartpage.clickPurchaseBtn()
  173 |     await expect(cartpage.confirmpurchasemsg).toBeVisible();
  174 |     await expect(cartpage.confirmpurchasemsg).toContainText('Thank you for your purchase!');
  175 | 
  176 |     await cartpage.clickOKButton()
  177 |     console.log("Order placed successfully!!!")    
  178 | })
```