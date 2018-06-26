import {protractor, browser, Config} from 'protractor';

declare const allure: any;

export let config: Config = {
    //directConnect: true,
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar",
    baseUrl: "http://www.protractortest.org/#/",
    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',
    useAllAngular2AppRoots: true,

    specs: ['com/bg/tests/*.spec.js'],

    jasmineNodeOpts: {
        defaultTimeoutInterval: 400000
    },
    getPageTimeout: 400000,
    allScriptsTimeout: 400000,
    onPrepare: () => {
        browser.manage().window().maximize();
    }
};