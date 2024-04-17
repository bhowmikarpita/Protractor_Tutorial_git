

let homepage = require('../pages/homepage');

describe('calculator tests', function () {
    it('addition test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNum(12);
        element(by.model('second')).sendKeys('2');
        homepage.clickGo();
        homepage.verifyResult('114');





        //  browser.get('https://juliemr.github.io/protractor-demo/');//tes

        //var first = element(by.model('first'));
        //first.sendKeys('123');

        //element(by.css('[ng-click="doAddition()"]')).click();
        //let result=element(by.cssContainingText('.ng-binding','125'));
        //expect(result.getText()).toEqual('125');

        //browser.sleep(1000)
    });
    it('substraction test', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNum('12');
        homepage.selectOperator('-');
        element(by.model('second')).sendKeys('2');
        homepage.clickGo();
        homepage.verifyResult('10');
    });


});