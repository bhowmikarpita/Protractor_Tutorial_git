let homepage = function () {
    let fn = element(by.model('first'));
    let goBtn = element(by.css('[ng-click="doAddition()"]'));

    this.get = function (url) {
        browser.get(url);

    };
    this.enterFirstNum = function (f) {
        fn.sendKeys(f);

    };
    this.clickGo = function () {
        goBtn.click();
    };
    this.verifyResult = function (output) {
        let result = element(by.cssContainingText('.ng-binding', output));
        //console.log(result);
        expect(result.getText()).toEqual(output);

    };

    this.selectOperator = function (operator) {
        element(by.cssContainingText('option',operator)).click();

    };
};
module.exports = new homepage();