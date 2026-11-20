import {test,expect} from '@playwright/test'
import { SignUpPage } from '../pages/SignUpPage'
import signupdata from '../utils/signupdata.json'

test('User Sign Up and Create Account', async({page})=>{
    const signuppage=new SignUpPage(page)
    await signuppage.openApplication()
    console.log("Application opened....")
    await signuppage.clickSignUpLink()
    console.log("Clicked sign up link")
    
    let alertmsg
    page.on('dialog',async dialog=>{
        console.log("Alert detected.....")
        expect(dialog.message()).toBe('Sign up successful.')
        await dialog.accept()
        alertmsg=dialog.message()

    })
    await signuppage.signUpUser(signupdata[0].username+Date.now(),signupdata[0].password+Date.now()) 
    console.log("Entered username and password")
    await signuppage.clicksignupbtn()
    console.log("Sign up status is ",alertmsg)
  
})

test('Enter SignUp data and Close',async ({page})=>{
    const signuppage=new SignUpPage(page)
    await signuppage.openApplication()
    await signuppage.clickSignUpLink()
    await signuppage.signUpUser(signupdata[0].username+Date.now(),signupdata[0].password+Date.now())
    await signuppage.clickclosebtn()
    console.log("Clicked close button and user account not created")
})