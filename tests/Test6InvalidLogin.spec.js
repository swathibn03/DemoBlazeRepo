import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import invalidlogin from '../utils/InvalidLogin.json'

test('Login with invalid username and valid password',async({page})=>{
    const loginpage=new LoginPage(page)
    await loginpage.openApplication()

    console.log('Application opened...')
    await loginpage.clickLoginLink()
    console.log("Clicked on login link")
    await page.waitForTimeout(3000)

    let loginalertmsg
    page.on('dialog',async dialog =>{
        console.log("Alert pop up...")
        expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
        loginalertmsg=dialog.message()
    })
    //await page.waitForTimeout(3000)
    await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
    await page.waitForTimeout(3000)
    
    await loginpage.clickLoginBtn()
    await page.waitForTimeout(3000)
    
    console.log("Alert message for invalid username and password is",loginalertmsg)
    await page.waitForTimeout(3000)

})