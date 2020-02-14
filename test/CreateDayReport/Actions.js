const{loginInput} = require('../CreateDayReport/Selectors');
const{URLS} = require('../CreateDayReport/URLS');




function login(role){
    browser.url(URLS.URL_LOGIN);
    $(loginInput.emailInput).setValue(role.email);
    $(loginInput.password).setValue(role.password);
    $(loginInput.submitButton).click();
    browser.pause(3000);
};


module.exports = {login};
