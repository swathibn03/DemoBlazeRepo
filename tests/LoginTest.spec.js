import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import {LogoutPage} from '../pages/LogoutPage'
import validlogin from '../utils/ValidLoginData.json'
import invalidlogin from '../utils/InvalidUsernameLogin.json'
import invalidpassword from '../utils/InvalidPasswordLogin.json'

for(const data of validlogin ){
    test(`Login with valid username ${data.username} and password ${data.password}`,async({page})=>{
       
        test.setTimeout(60000)
        const loginpage=new LoginPage(page)
        const logoutpage=new LogoutPage(page)
  
        await loginpage.openApplication()
        console.log('Application opened...')

        await loginpage.clickLoginLink()
        console.log("Clicked on login link")
       
        await loginpage.enterLoginCredentials(data.username,data.password)
        console.log(`Entered valid username ${data.username} and password`)
        
        await loginpage.clickLoginBtn()
        console.log("Clicked on log in button")
        
        await page.waitForTimeout(6000)
        await loginpage.verifyLogin(data.username)
        console.log('Login successful!')

        
        await logoutpage.clickLogoutLink()
        console.log("Clicked on logout link")
    })
}

test('Login with invalid username and valid password',async({page})=>{
    
    const loginpage=new LoginPage(page)

    await loginpage.openApplication()
    console.log('Application opened...')

    await loginpage.clickLoginLink()
    console.log("Clicked on login link")

    let loginalertmsg
    page.on('dialog',async dialog =>{
        console.log("Alert popping up for invalid user...")
        expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
        loginalertmsg=dialog.message()
    })
    
    await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
    await loginpage.clickLoginBtn()
    
    console.log("Alert message for invalid username is",loginalertmsg)
    expect(loginalertmsg).toBe('User does not exist.')
    console.log("User could not login")
})

test('Login with valid username and invalid password',async({page})=>{
    const loginpage=new LoginPage(page)
    
    await loginpage.openApplication()
    console.log('Application opened...')

    await loginpage.clickLoginLink()
    console.log("Clicked on login link")

    await loginpage.enterLoginCredentials(invalidpassword[0].username,invalidpassword[0].password)
    
    // let loginalertmsg
    // page.on('dialog',async dialog =>{
    //     console.log("Alert popping up for invalid password...")
    //     expect(dialog.message()).toBe('Wrong password.')
    //     await dialog.accept()
    //     loginalertmsg=dialog.message()
    // })

    const dialogPromise = page.waitForEvent('dialog')
    await loginpage.clickLoginBtn()
    const dialog = await dialogPromise
    const loginalertmsg = dialog.message()
    console.log('Alert message:', loginalertmsg)
    expect(loginalertmsg).toBe('Wrong password.')
    await dialog.accept()
    console.log('User could not login')

})

test('Login with invalid username and password',async({page})=>{
    
    const loginpage=new LoginPage(page)
    
    await loginpage.openApplication()
    console.log('Application opened...')

    await loginpage.clickLoginLink()
    console.log("Clicked on login link")
    
    let loginalertmsg
    page.on('dialog',async dialog =>{
        console.log("Alert popping up for wrong username and password...")
        expect(dialog.message()).toBe('User does not exist.')
        await dialog.accept()
        loginalertmsg=dialog.message()
    })
    await loginpage.enterLoginCredentials(invalidlogin[0].username,invalidlogin[0].password)
    await loginpage.clickLoginBtn()
    
    console.log("Alert message for invalid username and password is",loginalertmsg)
    expect(loginalertmsg).toBe('User does not exist.')
    console.log("User could not login")
    

})