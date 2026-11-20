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
Received: "User does not exist."
```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Wrong password."
Received: undefined
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