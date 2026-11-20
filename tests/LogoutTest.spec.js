import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'
import validlogin from '../utils/ValidLoginData.json'

test('Login with multiple valid users', async ({ page }) => {

    test.setTimeout(60000)
    const loginpage = new LoginPage(page)
    const logoutpage = new LogoutPage(page)

    await loginpage.openApplication()
        console.log('Application opened successfully')

    for (const data of validlogin) {
        console.log(`Starting login for user: ${data.username}`)

        await loginpage.clickLoginLink()
        console.log('Clicked on Login link')

        // Enter username and password
        await loginpage.enterLoginCredentials(data.username,data.password)
        console.log(`Entered credentials for ${data.username}`)

 
        await loginpage.clickLoginBtn()
        console.log('Clicked on Login button')

        await loginpage.verifyLogin(data.username)
        console.log(`Login successful for ${data.username}`)

        // Click Logout link
        await logoutpage.clickLogoutLink()
        console.log(`Logout successful for ${data.username}`)

        console.log('--------------------------------')
    }
})