export class LogoutPage{
    constructor(page){
        this.page=page
        this.logoutlink=page.locator('#logout2')
    }
    
    async clickLogoutLink(){
        await this.logoutlink.click()
    }
}