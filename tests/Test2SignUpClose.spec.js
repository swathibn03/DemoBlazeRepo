import {test,expect} from '@playwright/test'
import { SignUpPage } from '../pages/SignUpPage'
import signupdata from '../utils/signupdata.json'

test('Enter SignUp data and Close',async ({page})=>{
    const signuppage=new SignUpPage(page)
    await signuppage.openApplication()
    await signuppage.clickSignUpLink()
    await signuppage.signUpClose(signupdata[0].username+Date.now(),signupdata[0].password+Date.now())
    await signuppage.clickclosebtn()
    console.log("Clicked close button and user account not created")
})