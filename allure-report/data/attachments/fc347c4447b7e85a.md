# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.js >> Login with valid username and invalid password
- Location: tests\LoginTest.spec.js:62:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Wrong password."
Received: undefined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: dwhdyuo
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [ref=e15]: playwright
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [active] [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - img "First slide" [ref=e46]
        - img "Third slide" [ref=e48]
      - button "Previous" [ref=e49] [cursor=pointer]
      - button "Next" [ref=e52] [cursor=pointer]
  - generic [ref=e56]:
    - generic [ref=e58]:
      - link "CATEGORIES" [ref=e59] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e60] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e61] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e62] [cursor=pointer]:
        - /url: "#"
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e66]:
          - link [ref=e67] [cursor=pointer]:
            - /url: prod.html?idp_=1
          - generic [ref=e68]:
            - heading [level=4] [ref=e69]:
              - link "Samsung galaxy s6" [ref=e70] [cursor=pointer]:
                - /url: prod.html?idp_=1
            - heading "$360" [level=5] [ref=e71]
            - paragraph [ref=e72]: The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.
        - generic [ref=e74]:
          - link [ref=e75] [cursor=pointer]:
            - /url: prod.html?idp_=2
          - generic [ref=e76]:
            - heading [level=4] [ref=e77]:
              - link "Nokia lumia 1520" [ref=e78] [cursor=pointer]:
                - /url: prod.html?idp_=2
            - heading "$820" [level=5] [ref=e79]
            - paragraph [ref=e80]: The Nokia Lumia 1520 is powered by 2.2GHz quad-core Qualcomm Snapdragon 800 processor and it comes with 2GB of RAM.
        - generic [ref=e82]:
          - link [ref=e83] [cursor=pointer]:
            - /url: prod.html?idp_=3
          - generic [ref=e84]:
            - heading [level=4] [ref=e85]:
              - link "Nexus 6" [ref=e86] [cursor=pointer]:
                - /url: prod.html?idp_=3
            - heading "$650" [level=5] [ref=e87]
            - paragraph [ref=e88]: The Motorola Google Nexus 6 is powered by 2.7GHz quad-core Qualcomm Snapdragon 805 processor and it comes with 3GB of RAM.
        - generic [ref=e90]:
          - link [ref=e91] [cursor=pointer]:
            - /url: prod.html?idp_=4
          - generic [ref=e92]:
            - heading [level=4] [ref=e93]:
              - link "Samsung galaxy s7" [ref=e94] [cursor=pointer]:
                - /url: prod.html?idp_=4
            - heading "$800" [level=5] [ref=e95]
            - paragraph [ref=e96]: The Samsung Galaxy S7 is powered by 1.6GHz octa-core it comes with 4GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 200GB via a microSD card.
        - generic [ref=e98]:
          - link [ref=e99] [cursor=pointer]:
            - /url: prod.html?idp_=5
          - generic [ref=e100]:
            - heading [level=4] [ref=e101]:
              - link "Iphone 6 32gb" [ref=e102] [cursor=pointer]:
                - /url: prod.html?idp_=5
            - heading "$790" [level=5] [ref=e103]
            - paragraph [ref=e104]: It comes with 1GB of RAM. The phone packs 16GB of internal storage cannot be expanded. As far as the cameras are concerned, the Apple iPhone 6 packs a 8-megapixel primary camera on the rear and a 1.2-megapixel front shooter for selfies.
        - generic [ref=e106]:
          - link [ref=e107] [cursor=pointer]:
            - /url: prod.html?idp_=6
          - generic [ref=e108]:
            - heading [level=4] [ref=e109]:
              - link "Sony xperia z5" [ref=e110] [cursor=pointer]:
                - /url: prod.html?idp_=6
            - heading "$320" [level=5] [ref=e111]
            - paragraph [ref=e112]: Sony Xperia Z5 Dual smartphone was launched in September 2015. The phone comes with a 5.20-inch touchscreen display with a resolution of 1080 pixels by 1920 pixels at a PPI of 424 pixels per inch.
        - generic [ref=e114]:
          - link [ref=e115] [cursor=pointer]:
            - /url: prod.html?idp_=7
          - generic [ref=e116]:
            - heading [level=4] [ref=e117]:
              - link "HTC One M9" [ref=e118] [cursor=pointer]:
                - /url: prod.html?idp_=7
            - heading "$700" [level=5] [ref=e119]
            - paragraph [ref=e120]: The HTC One M9 is powered by 1.5GHz octa-core Qualcomm Snapdragon 810 processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage that can be expanded up to 128GB via a microSD card.
        - generic [ref=e122]:
          - link [ref=e123] [cursor=pointer]:
            - /url: prod.html?idp_=8
          - generic [ref=e124]:
            - heading [level=4] [ref=e125]:
              - link "Sony vaio i5" [ref=e126] [cursor=pointer]:
                - /url: prod.html?idp_=8
            - heading "$790" [level=5] [ref=e127]
            - paragraph [ref=e128]: Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight.
        - generic [ref=e130]:
          - link [ref=e131] [cursor=pointer]:
            - /url: prod.html?idp_=9
          - generic [ref=e132]:
            - heading [level=4] [ref=e133]:
              - link "Sony vaio i7" [ref=e134] [cursor=pointer]:
                - /url: prod.html?idp_=9
            - heading "$790" [level=5] [ref=e135]
            - paragraph [ref=e136]: REVIEW Sony is so confident that the VAIO S is a superior ultraportable laptop that the company proudly compares the notebook to Apple's 13-inch MacBook Pro. And in a lot of ways this notebook is better, thanks to a lighter weight, higher-resolution display, more storage space, and a Blu-ray drive.
      - list [ref=e138]:
        - listitem [ref=e139]:
          - button "Previous" [ref=e140]
        - listitem [ref=e141]:
          - button "Next" [ref=e142] [cursor=pointer]
  - generic [ref=e144]:
    - generic [ref=e147]:
      - heading "About Us" [level=4] [ref=e148]
      - paragraph [ref=e149]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e152]:
      - heading "Get in Touch" [level=4] [ref=e153]
      - paragraph [ref=e154]: "Address: 2390 El Camino Real"
      - paragraph [ref=e155]: "Phone: +440 123456"
      - paragraph [ref=e156]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e160]
  - contentinfo [ref=e162]:
    - paragraph [ref=e163]: Copyright © Product Store
```

# Test source

```ts
  1   | import {test,expect} from '@playwright/test'
  2   | import { LoginPage } from '../pages/LoginPage'
  3   | import {LogoutPage} from '../pages/LogoutPage'
  4   | import validlogin from '../utils/ValidLoginData.json'
  5   | import invalidlogin from '../utils/InvalidUsernameLogin.json'
  6   | 
  7   | for(const data of validlogin ){
  8   |     test(`Login with valid username ${data.username} and password ${data.password}`,async({page})=>{
  9   |        
  10  |         test.setTimeout(60000)
  11  |         const loginpage=new LoginPage(page)
  12  |         const logoutpage=new LogoutPage(page)
  13  |   
  14  |         await loginpage.openApplication()
  15  |         console.log('Application opened...')
  16  | 
  17  |         await loginpage.clickLoginLink()
  18  |         console.log("Clicked on login link")
  19  |        
  20  |         await loginpage.enterLoginCredentials(data.username,data.password)
  21  |         console.log(`Entered valid username ${data.username} and password`)
  22  |         
  23  |         await loginpage.clickLoginBtn()
  24  |         console.log("Clicked on log in button")
  25  |         
  26  |         await page.waitForTimeout(6000)
  27  |         await loginpage.verifyLogin(data.username)
  28  |         console.log('Login successful!')
  29  | 
  30  |         
  31  |         await logoutpage.clickLogoutLink()
  32  |         console.log("Clicked on logout link")
  33  |     })
  34  | }
  35  | 
  36  | test('Login with invalid username and valid password',async({page})=>{
  37  |     
  38  |     const loginpage=new LoginPage(page)
  39  | 
  40  |     await loginpage.openApplication()
  41  |     console.log('Application opened...')
  42  | 
  43  |     await loginpage.clickLoginLink()
  44  |     console.log("Clicked on login link")
  45  | 
  46  |     let loginalertmsg
  47  |     page.on('dialog',async dialog =>{
  48  |         console.log("Alert popping up for invalid user...")
  49  |         expect(dialog.message()).toBe('User does not exist.')
  50  |         await dialog.accept()
  51  |         loginalertmsg=dialog.message()
  52  |     })
  53  |     
  54  |     await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
  55  |     await loginpage.clickLoginBtn()
  56  |     
  57  |     console.log("Alert message for invalid username is",loginalertmsg)
  58  |     expect(loginalertmsg).toBe('User does not exist.')
  59  |     console.log("User could not login")
  60  | })
  61  | 
  62  | test('Login with valid username and invalid password',async({page})=>{
  63  |     const loginpage=new LoginPage(page)
  64  |     
  65  |     await loginpage.openApplication()
  66  |     console.log('Application opened...')
  67  | 
  68  |     await loginpage.clickLoginLink()
  69  |     console.log("Clicked on login link")
  70  |     
  71  |     let loginalertmsg
  72  |     page.on('dialog',async dialog =>{
  73  |         console.log("Alert popping up for invalid password...")
  74  |         expect(dialog.message()).toBe('Wrong password.')
  75  |         await dialog.accept()
  76  |         loginalertmsg=dialog.message()
  77  |     })
  78  |     
  79  |     await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
  80  |     await loginpage.clickLoginBtn()
  81  |    
  82  |     console.log("Alert message for invalid password is",loginalertmsg)
> 83  |     expect(loginalertmsg).toBe('Wrong password.')
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  84  |     console.log("User could not login")
  85  | 
  86  | })
  87  | 
  88  | test('Login with invalid username and password',async({page})=>{
  89  |     
  90  |     const loginpage=new LoginPage(page)
  91  |     
  92  |     await loginpage.openApplication()
  93  |     console.log('Application opened...')
  94  | 
  95  |     await loginpage.clickLoginLink()
  96  |     console.log("Clicked on login link")
  97  |     
  98  |     let loginalertmsg
  99  |     page.on('dialog',async dialog =>{
  100 |         console.log("Alert popping up for wrong username and password...")
  101 |         expect(dialog.message()).toBe('User does not exist.')
  102 |         await dialog.accept()
  103 |         loginalertmsg=dialog.message()
  104 |     })
  105 |     await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
  106 |     await loginpage.clickLoginBtn()
  107 |     
  108 |     console.log("Alert message for invalid username and password is",loginalertmsg)
  109 |     expect(loginalertmsg).toBe('User does not exist.')
  110 |     console.log("User could not login")
  111 |     
  112 | 
  113 | })
```