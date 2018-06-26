import {ElementFinder, browser, by, element,promise} from 'protractor';

  export class locators {
    getLocatorType(locator:any) {
        switch (locator.method) {
            case "id":
                return by.id(locator.value);
            case "name":
                return by.name(locator.value);
            case "model":
                return by.model(locator.value);
            case "binding":
                return by.binding(locator.value);
            case "repeater":
                return by.repeater(locator.value);
            case "xpath":
                return by.xpath(locator.value);
            case "css":
                return by.css(locator.value);
            case "options":
                return by.options(locator.value);
            case "linkText":
                return by.linkText(locator.value);
            case "buttonText":
                return by.buttonText(locator.value);
        }
    }
}