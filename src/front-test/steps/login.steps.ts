import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
 login,
 mail, 
 password,
 loginBtn,
 header,
 myAccount,
 accMail,
 accPass

} from '../locators/login.locator';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getByText,
  getByLocatorAndFillIt,
  getByLocator,
  

  

} from '../utils/interactions';
import { url } from 'inspector';


Given("el usuario esta en lambdatest", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
}); 

When("el usuario clickea en el boton de 'Login'", async function () {
  for (const page of pages) {
    await page.getByRole ("button", { name: myAccount}).hover();
    await page.getByRole ("link", { name: login} ).click();
    } 
});

When("el usuario ingresa el mail", async function () {
  for (const page of pages) {
    await getByLocatorAndFillIt(page, mail, accMail);
    } 
});

When("el usuario ingresa la contraseña", async function () {
  for (const page of pages) {
    await getByLocatorAndFillIt(page, password, accPass);
    } 
});

When("el usuario clickea en el segundo boton de 'Login'", async function () {
  for (const page of pages) {
    await page.getByRole("button", {name: loginBtn}  ).click();
    } 
});

Then("el usuario deberia ser redireccionado a la seccion de 'My Account'", async function () {
  for (const page of pages) {
   await page.getByRole("heading", {name: myAccount} ); 
  }
});

