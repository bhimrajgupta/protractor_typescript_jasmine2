import {by, element} from "protractor";
import {locators} from "../resources/common";
let locator=require('../resources/locators.json');

export class Home extends locators{
public goToProtractorAPI(){
    element(this.getLocatorType(locator.homePage.tabReference)).click();
    }
}