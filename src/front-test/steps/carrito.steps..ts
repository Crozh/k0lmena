import { expect } from '@playwright/test';
import { Given, When, Then } from '@cucumber/cucumber';
import { BASEURL } from '../config';
import { pages } from '../hooks/hook';
import { validateFirstLocator } from '../utils/validations';
import {


} from '../locators/registro.locator';
import {


} from '../utils/interactions';
import { url } from 'inspector';
import { DataTable } from '@wdio/cucumber-framework';
import { data } from 'cheerio/dist/commonjs/api/attributes';
import { buttonSave, buyBtn, inputAgree, paymentAdress, paymentCity, paymentCountry, paymentFirstName, paymentLastName, paymentZone, producto, mainPage } from '../locators/carrito.locator';

Given("el usuario esta logueado a lambdatest", async () => {
  for (const page of pages) {
    console.log(`Ejecutando prueba en navegador: ${page.context().browser()?.browserType().name()}`);
    await page.getByRole("link", {name: mainPage}).click();
  }
}); 

When("el usuario ingresa a la pagina del producto", async function () {
  for (const page of pages) {
    await page.locator(producto).click();
    } 
});

When("el usuario clickea en el boton 'Buy Now'", async function () {
  for (const page of pages) {
      await page.getByRole('button', { name: buyBtn}).click();
    
    } 
});

When("el usuario ingresa estos datos:", async function (DataTable) {
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

When("el usuario clickeo en el checkbox 'Terms & Conditions'", async function () {
  for (const page of pages) {
    await page.getByText(inputAgree).click();
    } 
});

When("el usuario clickeo en el boton 'Continue'", async function () {
  for (const page of pages) {
     await page.locator(buttonSave).click();
  }
});


Then("el usuario clickea en el boton 'Confirm Order'", async function () {
  for (const page of pages) {
    
  }
});


Then("el usuario deberia ver un mensaje de orden exitosa", async function () {
  for (const page of pages) {
    
  }
});