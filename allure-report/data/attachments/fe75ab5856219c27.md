# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Test3LoginValidDataUser.spec.js >> Login with valid username Swathi3 and password playwright
- Location: tests\Test3LoginValidDataUser.spec.js:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#nameofuser')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" locator('#nameofuser') with timeout 5000ms
  - waiting for locator('#nameofuser')
    13 × locator resolved to <a href="#" id="nameofuser" class="nav-link"></a>
       - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | export class LoginPage{
  3  | 
  4  |     constructor(page){
  5  |         this.page=page
  6  |         this.loginlink=page.locator('#login2')
  7  |         this.loginusername=page.locator('#loginusername')
  8  |         this.loginpassword=page.locator('#loginpassword')
  9  |         this.loginbtn=page.locator('#logInModal button:has-text("Log in")')
  10 |         this.welcommsg=page.locator('#nameofuser')
  11 |     }
  12 |     async openApplication(){
  13 |         await this.page.goto('https://www.demoblaze.com/')
  14 |     }
  15 |     async clickLoginLink(){
  16 |         await expect(this.loginlink).toBeVisible()
  17 |         await this.loginlink.click()
  18 |     }
  19 |     async enterLoginCredentials(username,password){
  20 |         await expect(this.loginusername).toBeVisible()
  21 |         await this.loginusername.fill(username)
  22 |         await expect(this.loginpassword).toBeVisible()
  23 |         await this.loginpassword.fill(password)
  24 |     }
  25 |     async clickLoginBtn(){
  26 |         await expect(this.loginbtn).toBeVisible()
  27 |         await expect(this.loginbtn).toBeEnabled()
  28 |         await this.loginbtn.click()
  29 |     }
  30 | 
  31 |     async verifyLogin(username) {
> 32 |         await expect(this.welcommsg).toBeVisible()
     |                                      ^ Error: expect(locator).toBeVisible() failed
  33 |         await expect(this.welcommsg).toContainText(username);
  34 |     }
  35 | 
  36 | }
```