import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import { privPolicy } from '../locators/registro.locator';
import {


} from '../utils/interactions';
import { url } from 'inspector';
import { DataTable } from '@wdio/cucumber-framework';
import { data } from 'cheerio/dist/commonjs/api/attributes';
import { buttonSave, buyBtn, inputAgree, paymentAdress, paymentCity, paymentCountry, paymentFirstName, paymentLastName, paymentZone, producto, mainPage, radioAdress, buttonConf, firstNameBlank, lastNameBlank, addressBlank, cityBlank, termsBlank, newAddress } from '../locators/carrito.locator';

Given("el usuario esta logueado en la pagina principal de lambdatest", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.getByRole("link", {name: mainPage}).click();
  }
}); 

When("el usuario ingresa a la pagina de un producto", async function () {
  for (const page of pages) {
    await page.locator(producto).click();
    } 
});

When("el usuario clickea el boton de 'Buy Now'", async function () {
  for (const page of pages) {
      await page.getByRole('button', { name: buyBtn}).click();
      await page.locator('#payment-address').getByText(newAddress).click();
    } 
});

When("el usuario ingresa estos datos invalidos:", async function (DataTable) {
  for (const page of pages) {
    const row0 = DataTable.hashes()[0];
    await page.fill (paymentFirstName, row0.nombre);
    await page.fill (paymentLastName, row0.apellido);
    await page.fill (paymentAdress, row0.direccion);
    await page.fill (paymentCity, row0.ciudad);
    await page.locator(paymentCountry).selectOption(row0.pais);
    await page.locator(paymentZone).selectOption(row0.region);
    } 
});


When("el usuario clickea en el boton Continue", async function () {
  for (const page of pages) {
  await page.waitForTimeout(500); 
  await page.locator(buttonSave).dblclick();
  }
});



Then("el usuario deberia ver el mensaje: 'First Name must be between 1 and 32 characters!'", async function () {
  for (const page of pages) {
    await page.getByText(firstNameBlank).selectText();
  }
});

Then("el usuario deberia ver el mensaje: 'Last Name must be between 1 and 32 characters!'", async function () {
  for (const page of pages) {
    await page.getByText(lastNameBlank).selectText();
  }
});


Then("el usuario deberia ver el mensaje de: 'Address 1 must be between 3 and 128 characters!'", async function () {
  for (const page of pages) {
    await page.getByText(addressBlank).selectText();
  }
});


Then("el usuario deberia ver el mensaje de: 'City must be between 2 and 128 characters!'", async function () {
  for (const page of pages) {
    await page.getByText(cityBlank).selectText();
  }
});


Then("el usuario debera ver el mensaje de: 'Warning: You must agree to the Terms & Conditions!'", async function () {
  for (const page of pages) {
    // await page.getByText(termsBlank).selectText();
    await page.getByText(privPolicy).click();
  }
});