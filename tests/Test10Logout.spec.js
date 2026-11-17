import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'
import validlogin from '../utils/ValidLoginData.json'

test('Logout from the application',async({page})=>{
    const loginpage=new LoginPage(page)
    const logoutpage=new LogoutPage(page)

    await loginpage.openApplication()
    await loginpage.clickLoginLink()

    await page.waitForTimeout(3000)
    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password)
    await loginpage.clickLoginBtn()
    await expect(page).toHaveURL('https://www.demoblaze.com/')

    await logoutpage.clickLogoutLink()
    console.log("Logged out from the application")
})