export class LoginPage{

    constructor(page){
        this.page=page
        this.loginlink=page.locator('#login2')
        this.loginusername=page.locator('#loginusername')
        this.loginpassword=page.locator('#loginpassword')
        this.loginbtn=page.locator('#logInModal button:has-text("Log in")')
        this.welcommsg=page.locator('#nameofuser')
        this.logoutlink=page.locator('#logout2')
    }
    async openApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }
    async clickLoginLink(){
        await this.loginlink.click()
    }
    async enterLoginCredentials(username,password){

        this.loginusername.fill(username)
        this.loginpassword.fill(password)
    }
    async clickLoginBtn(){
        await this.loginbtn.click()
    }
    async clickLogoutLink(){
        await this.logoutlink.click()
    }
}