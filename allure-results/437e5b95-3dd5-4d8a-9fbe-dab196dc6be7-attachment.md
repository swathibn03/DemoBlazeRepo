# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductPurchase.spec.js >> Purchase phone item
- Location: tests\ProductPurchase.spec.js:48:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//a[text()="Add to cart"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('//a[text()="Add to cart"]') with timeout 5000ms
  - waiting for locator('//a[text()="Add to cart"]')

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
- link:
  - /url: "#myCarousel-2"
- link:
  - /url: "#myCarousel-2"
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
  1  | import { expect } from "@playwright/test";
  2  | export class ProductPage{
  3  |     constructor(page){
  4  |         this.page=page
  5  |        // this.addToCartBtn = page.getByRole('link', { name: 'Add to cart' })
  6  |         this.addToCartBtn=page.locator('//a[text()="Add to cart"]')
  7  |     }
  8  | 
  9  |     async clickAddToCartBtn(){
> 10 |         await expect(this.addToCartBtn).toBeVisible()
     |                                         ^ Error: expect(locator).toBeVisible() failed
  11 |         await this.addToCartBtn.click()
  12 |     }
  13 | }
```