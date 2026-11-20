# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTest.spec.js >> Login with valid username and invalid password
- Location: tests\LoginTest.spec.js:62:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Wrong password."
Received: "User does not exist."
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
  62  | test.only('Login with valid username and invalid password',async({page})=>{
  63  |     const loginpage=new LoginPage(page)
  64  |     
  65  |     await loginpage.openApplication()
  66  |     console.log('Application opened...')
  67  | 
  68  |     await loginpage.clickLoginLink()
  69  |     console.log("Clicked on login link")
  70  | 
  71  |     await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
  72  |     
  73  |     // let loginalertmsg
  74  |     // page.on('dialog',async dialog =>{
  75  |     //     console.log("Alert popping up for invalid password...")
  76  |     //     expect(dialog.message()).toBe('Wrong password.')
  77  |     //     await dialog.accept()
  78  |     //     loginalertmsg=dialog.message()
  79  |     // })
  80  | 
  81  |     const dialogPromise = page.waitForEvent('dialog')
  82  | 
  83  |     await loginpage.clickLoginBtn()
  84  | 
  85  |     const dialog = await dialogPromise
  86  | 
  87  |     const loginalertmsg = dialog.message()
  88  | 
  89  |     console.log('Alert message:', loginalertmsg)
  90  | 
> 91  |     expect(loginalertmsg).toBe('Wrong password.')
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  92  | 
  93  |     await dialog.accept()
  94  | 
  95  |     console.log('User could not login')
  96  |     
  97  |     
  98  |     await loginpage.clickLoginBtn()
  99  |    
  100 |     console.log("Alert message for invalid password is",loginalertmsg)
  101 |     expect(loginalertmsg).toBe('Wrong password.')
  102 |     console.log("User could not login")
  103 | 
  104 | })
  105 | 
  106 | test('Login with invalid username and password',async({page})=>{
  107 |     
  108 |     const loginpage=new LoginPage(page)
  109 |     
  110 |     await loginpage.openApplication()
  111 |     console.log('Application opened...')
  112 | 
  113 |     await loginpage.clickLoginLink()
  114 |     console.log("Clicked on login link")
  115 |     
  116 |     let loginalertmsg
  117 |     page.on('dialog',async dialog =>{
  118 |         console.log("Alert popping up for wrong username and password...")
  119 |         expect(dialog.message()).toBe('User does not exist.')
  120 |         await dialog.accept()
  121 |         loginalertmsg=dialog.message()
  122 |     })
  123 |     await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
  124 |     await loginpage.clickLoginBtn()
  125 |     
  126 |     console.log("Alert message for invalid username and password is",loginalertmsg)
  127 |     expect(loginalertmsg).toBe('User does not exist.')
  128 |     console.log("User could not login")
  129 |     
  130 | 
  131 | })
```