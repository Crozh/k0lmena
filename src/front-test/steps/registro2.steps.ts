import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {
registro,
firstName,
lastName,
email,
telephone,
confPassword,
privacy,
cont,
myAccount,
password,
success,
passwordBlank,
telephoneBlank,
mailBlank,
lastNameBlank,
firstNameBlank,
privPolicy,




} from '../locators/registro.locator';
import {
  getByPlaceholderAndClickIt,
  getByPlaceholderAndFillIt,
  getByText,
  getByLocatorAndFillIt,
  getByLocator,
  

  

} from '../utils/interactions';
import { url } from 'inspector';
import { DataTable } from '@wdio/cucumber-framework';
import { data } from 'cheerio/dist/commonjs/api/attributes';


Given("el usuario esta en la pagina lambdatest", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.goto(BASEURL);
  }
}); 

When("el usuario clickea el boton de 'Register'", async function () {
  for (const page of pages) {
    await page.getByRole ("button", { name: myAccount}).hover();
    await page.getByRole ("link", { name: registro} ).click();
    } 
});

When('el usuario ingresa los datos invalidos:', async function (DataTable) {
  for (const page of pages) {
    const row = DataTable.hashes()[0];
    await page.fill(firstName, row.nombre);
    await page.fill(lastName, row.apellido);
    await page.fill(email, row.mail);
    await page.fill(telephone, row.telefono);
    await page.fill(password, row.contraseña);
    await page.fill(confPassword , row.contraseña2);

    } 
});

When("el usuario clickea en el checkbox 'Privacy Policy'", async function () {
  for (const page of pages) {
    await page.getByText(privacy).click();
    } 
});

When("el usuario clickea en el boton 'Continue'", async function () {
  for (const page of pages) {
    await page.getByRole("button", {name: cont}).click();
    
    } 
});

Then("el usuario deberia ver el mensaje de: 'First Name must be between 1 and 32 characters!'", async function () {
  for (const page of pages) {
   await page.getByText(firstNameBlank).selectText();
  }
});

Then("el usuario deberia ver el mensaje de: 'Last Name must be between 1 and 32 characters!'", async function () {
  for (const page of pages) {
   await page.getByText(lastNameBlank).selectText();
  }
});

Then("el usuario deberia ver el mensaje de: 'E-Mail Address does not appear to be valid!'", async function () {
  for (const page of pages) {
   await page.getByText(mailBlank).selectText();
  }
});

Then("el usuario deberia ver el mensaje de: 'Telephone must be between 3 and 32 characters!'", async function () {
  for (const page of pages) {
   await page.getByText(telephoneBlank).selectText();
  }
});

Then("el usuario deberia ver el mensaje de: 'Password must be between 4 and 20 characters!'", async function () {
  for (const page of pages) {
   await page.getByText(passwordBlank).selectText();
  }
});

// Then("el usuario deberia ver el mensaje de 'You must agree to the Privacy Policy!'", async function () {
//   for (const page of pages) {
//   await page.getByText(privPolicy).selectText();
//   }
// });
