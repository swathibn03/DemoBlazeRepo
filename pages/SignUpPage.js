export class SignUpPage{
    constructor(page){
        this.page=page
        this.signuplink=page.locator('#signin2')
        this.username=page.locator('#sign-username')
        this.password=page.locator('#sign-password')
        this.signupbtn=page.locator("//button[text()='Sign up']")
        //this.closebtn=page.locator('//button[text()="Close" and @class="btn btn-secondary"]')
        this.closebtn = page.locator('#signInModal button:has-text("Close")');
    }

    async openApplication(){
        await this.page.goto('https://www.demoblaze.com/')
    }

    async clickSignUpLink(){
        await this.signuplink.click()
    }

    async signUpUser(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clicksignupbtn(){
        await this.signupbtn.click()
    }


    async clickclosebtn(){
        await this.closebtn.click()
    }

    
    
}