"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class helperObject {
    getLocator(locator) {
        switch (locator.method) {
            case "id":
                return protractor_1.by.id(locator.value);
            case "name":
                return protractor_1.by.name(locator.value);
            case "model":
                return protractor_1.by.model(locator.value);
            case "binding":
                return protractor_1.by.binding(locator.value);
            case "repeater":
                return protractor_1.by.repeater(locator.value);
            case "xpath":
                return protractor_1.by.xpath(locator.value);
            case "css":
                return protractor_1.by.css(locator.value);
            case "options":
                return protractor_1.by.options(locator.value);
            case "linkText":
                return protractor_1.by.linkText(locator.value);
            case "buttonText":
                return protractor_1.by.buttonText(locator.value);
        }
    }
    goToUrl(url) {
        protractor_1.browser.get(url);
    }
    getURL() {
        return protractor_1.browser.getCurrentUrl();
    }
    goToBrowserBack() {
        protractor_1.browser.navigate().back();
    }
    getPageTitle() {
        return protractor_1.browser.getTitle();
    }
    clearFocus() {
        return protractor_1.browser.actions().mouseMove({ x: 9999, y: 9999 }).click().perform();
    }
    selectDropdownByIndex(element, index) {
        return protractor_1.browser.promise.all(element.click(), element.all(protractor_1.by.tagName('option')).get(index).click(), this.clearFocus());
    }
    selectDropdownByValue(element, value) {
        return protractor_1.browser.promise.all(element.click(), element.all(protractor_1.by.css('option[value="' + value + '"]')).first().click(), this.clearFocus);
    }
}
exports.helperObject = helperObject;
