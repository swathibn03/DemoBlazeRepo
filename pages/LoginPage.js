import {expect} from '@playwright/test'
export class LoginPage{

    constructor(page){
        this.page=page
        this.loginlink=page.locator('#login2')
        this.loginusername=page.locator('#loginusername')
        this.loginpassword=page.locator('#loginpassword')
        this.loginbtn=page.locator('#logInModal button:has-text("Log in")')
        this.welcommsg=page.locator('#nameofuser')
    }
    async openApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
    async clickLoginLink(){
        await expect(this.loginlink).toBeVisible()
        await this.loginlink.click()
    }
    async enterLoginCredentials(username,password){
        await expect(this.loginusername).toBeVisible()
        await this.loginusername.fill(username)
        await expect(this.loginpassword).toBeVisible()
        await this.loginpassword.fill(password)
    }
    async clickLoginBtn(){
        await expect(this.loginbtn).toBeVisible()
        await expect(this.loginbtn).toBeEnabled()
        await this.loginbtn.click()
    }

    async verifyLogin(username) {
        await expect(this.welcommsg).toBeVisible()
        await expect(this.welcommsg).toContainText(username);
    }

}