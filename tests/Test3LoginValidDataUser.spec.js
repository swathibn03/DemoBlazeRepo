import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import validlogin from '../utils/ValidLoginData.json'



test('Login with valid username and password ${data.username} ${data.password}',async({page})=>{
    const loginpage=new LoginPage(page)
    for(const data of validlogin ){
        await loginpage.openApplication()
        console.log('Application opened...')
        await loginpage.clickLoginLink()
        console.log("Clicked on login link")
       // await page.waitForTimeout(3000)
        await loginpage.enterLoginCredentials(data.username,data.password)
        console.log(`Entered valid username ${data.username} and password ${data.password}`)
        await page.waitForTimeout(3000)
        await loginpage.clickLoginBtn()
        console.log("Clicked on log in button")
        await page.waitForTimeout(3000)
        const loginmsg=await loginpage.welcommsg.innerText()
        console.log(loginmsg)
        expect(loginmsg).toContain(data.username)

        await loginpage.clickLogoutLink()
    }

})
    
/*
test("valid username and password",async ({page})=>{
    const loginpage=new LoginPage(page)
    
    await loginpage.openApplication()
    console.log('Application opened...')
    await loginpage.clickLoginLink()
    console.log("Clicked on login link")
    await page.waitForTimeout(3000)
    await loginpage.enterLoginCredentials(validlogin[0].username,validlogin[0].password)
    await page.waitForTimeout(3000)

    await loginpage.clickLoginBtn()
    await page.waitForTimeout(3000)
    const loginmsg=await loginpage.welcommsg.innerText()
  
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    expect(loginmsg).toContain(validlogin[0].username)
    await page.waitForTimeout(3000)


})
    */