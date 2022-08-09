import { Given, When, Then } from '@wdio/cucumber-framework';

import GroceriesPage from '../pageobjects/groceries.page';
import ResultsPage from "../pageobjects/results.page";

const pages = {
    groceries: GroceriesPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open(page);
});

When(/^I enter the search text (\w+)$/, async function (searchText) {
    await GroceriesPage.searchInput().setValue(searchText);
});

When(/^I click the search button$/, async function () {
    await GroceriesPage.searchButton().click();
});

Then("I should see a product with the name {string} in the results page", async function (productName) {
    await expect(ResultsPage.productTitle(productName)).toBeExisting();
});