const{URLS} = require('../URLS');
const{admin} = require('../Users');
const{login} = require('../Actions');
const {pageDayReportSelectors} = require('..//Selectors');

const {expect} = require('chai');


describe('CREATE DAY REPORT', () => {
    before('Login as Admin', () => {
        login(admin)
    });

    it('should choose Moral grade' , () => {
        browser.url(URLS.URL_DIARY_CREATE);
        const selectBox = $(pageDayReportSelectors.moraleInput);
        selectBox.selectByVisibleText(admin.morale);
    });

    it('should fill up hours studied', () => {
        const element = $(pageDayReportSelectors.hoursStudiedInput);
        element.setValue(admin.hoursStudied);

    });

    it('should fill `How was your day` form', () => {
        const element = $(pageDayReportSelectors.descriptionInput);
        element.setValue(admin.description);
    });

    it('should check `I understood everything` checkbox', () => {
        const element = $(pageDayReportSelectors.iUnderstoodEverythingInput);
        element.click();
    });

    it('should check `Watched lectures` checkbox', () => {
        const element = $(pageDayReportSelectors.watchedLecturesInput);
        element.click();
    });

    it('should check `Read documentation` checkbox', () => {
        const element = $(pageDayReportSelectors.readDocumentationInput);
        element.click();
    });

    it('should check `Code practice` checkbox', () => {
        const element = $(pageDayReportSelectors.codePractice);
        element.click();
    });

    it('should click `Quiz practice` checkbox', () => {
        const element = $(pageDayReportSelectors.quizPracticeInput);
        element.click();
        browser.pause(5000);
    });


});


