const loginPage = require('../pageobjects/login.page')
const { expect } = require('chai')

describe('Mobile Test Suite', ()=>{

it('1 validate email field', async ()=>{
 expect(await loginPage.email.isDisplayed()).to.equal(true)
})

it('2 validate password field', async ()=>{
 expect(await loginPage.password.isDisplayed()).to.equal(true)
})

it('3 valid login attempt', async ()=>{
 await loginPage.login('test@test.com','123456')
})

it('4 invalid login attempt', async ()=>{
 await loginPage.login('invalid@test.com','wrong')
})

it('5 navigate to Forms', async ()=>{
 const forms = await $('~Forms')
 await forms.click()
})

it('6 validate Forms screen', async ()=>{
 const forms = await $('~Forms')
 expect(await forms.isDisplayed()).to.equal(true)
})

it('7 fill input text', async ()=>{
 const input = await $('~text-input')
 await input.setValue('Automation Test')
})

it('8 toggle switch', async ()=>{
 const toggle = await $('~switch')
 await toggle.click()
})

it('9 validate active button', async ()=>{
 const active = await $('~button-Active')
 expect(await active.isDisplayed()).to.equal(true)
})

it('10 validate inactive button', async ()=>{
 const inactive = await $('~button-Inactive')
 expect(await inactive.isDisplayed()).to.equal(true)
})

})