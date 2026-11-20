import { expect } from "@playwright/test";
export class LogoutPage{
    constructor(page){
        this.page=page
        this.logoutlink=page.locator('#logout2')
    }
    
    async clickLogoutLink(){
        await expect(this.logoutlink).toBeVisible()
        await this.logoutlink.click()
    }
}