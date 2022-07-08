import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';

const userDetails = { }

const dates = { }

const pages = {
    main: MainPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open("");
});

Given(/^my name is (\w+)$/, function (name) {
    userDetails.name = name;
});

Given(/^my first name is (\w+)$/, function (firstName) {
    userDetails.firstName = firstName;
});

Given(/^my last name is (\w+)$/, function (lastName) {
    userDetails.lastName = lastName;
});

Given(/^my email address is (.*)$/, function (email) {
    userDetails.email = email;
});

Given(/^my phone number is (.*)$/, function (phone) {
    userDetails.phone = phone;
});

Given(/^I wish to check in on (\d+) July$/, function (checkIn) {
    dates.checkIn = checkIn;
});

Given(/^I wish to check out on (\d+) July$/, function (checkOut) {
    dates.checkOut = checkOut;
});



When(/^I put my details into the contact form$/, async function () {
    await MainPage.inputDetails(userDetails);
});

When(/^I include the subject "(.*)"$/, async function (subject) {
    await MainPage.inputSubject.setValue(subject);
});

When(/^I include the message "(.*)"$/, async function (message) {
    await MainPage.inputMessage.setValue(message);
});

When(/^I click the Submit button$/, async function () {
    await MainPage.btnSubmit.click();
});

When(/^I click book on single room$/, async function () {
    await MainPage.btnSingleRoomBook.click();
    await browser.waitUntil(function () { return false; });
});



Then(/^I should see a message saying "(.*)"$/, async function (message) {
    await expect(MainPage.confirmationMessage).toBeExisting();
    await expect(MainPage.confirmationMessage).toHaveText(message);
});

Then(/^I should see a message with my subject "(.*)"$/, async function (subject) {
    await expect(MainPage.confirmationMessageSubject).toBeExisting();
    await expect(MainPage.confirmationMessageSubject).toHaveText(subject);
});