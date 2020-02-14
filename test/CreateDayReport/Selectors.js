const loginInput = {
    emailInput:'//input[@name=\'email\']',
    password: '//input[@name="password"]',
    submitButton: 'form button[type="submit"]'
};

const pageDayReportSelectors = {
    emailInput:'//input[@name=\'email\']',
    password: '//input[@name="password"]',
    submitButton: 'form button[type="submit"]',
    moraleInput: 'select[name="morale"]',
    hoursStudiedInput: 'form input[name="hours"]',
    descriptionInput: 'form textarea[name="description"]',
    iUnderstoodEverythingInput: 'form input[label="I understood everything"]',
    watchedLecturesInput: 'form input[label = "Watched lectures"]',
    readDocumentationInput: 'form input[label = "Read documentation"]',
    codePractice: 'form input[label = "Code practice"]',
    quizPracticeInput: 'form input[label = "Quiz practice"]',
};



module.exports = {loginInput, pageDayReportSelectors};