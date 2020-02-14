

// const HOST = 'https://stage.pasv.us';
//
// const URLS = {
//     URL_REGISTER: `${HOST}/user/register`,
//     URL_LOGIN: `${HOST}/user/login`,
//     URL_DIARY_CREATE: `${HOST}/diary/create`,
//     URL_GROUP_CREATE: `${HOST}/group/create`,
//     URL_COURSE_CREATE: `${HOST}/course/create`,
//     URL_FLASHCARDS_CREATE: `${HOST}/flash`,
//     URL_QUIZ_CREATE: `${HOST}/quiz`,
//     URL_CHALLENGE_CREATE: `${HOST}/challenge`,
// };

const pageRegister = {
    title: 'Progress Monitor',
    h1: 'User Register',
    description: 'Profiles with fictitious or dummy data will be deleted.',
    buttonText: 'Submit',
};

const pageRegisterSelectors = {
    h1: 'h1',
    description: 'p',
    submitButton: 'form button[type="submit"]',
    firstNameInput: 'form input[name="firstName"]',
    lastNameInput: 'form input[name="lastName"]',
    phoneInput: 'form input[name="phone"]',
    emailInput: 'form input[name="email"]',
    passwordInput: 'form input[name="password"]',
    aboutInput: 'form textarea[name="about"]',
    goalsInput: 'form textarea[name="goals"]',
    englishLevelInput: 'form select[name="englishLevel"]',
};


const pageCreateNewGroup = {
    groupName: '6 JavaScript Operators Reference',
    groupDescription: 'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more',
    groupAccessType: 'All',
    groupLectureName: 'QA5 TEST 1',
    groupYouTubeLink: 'https://www.youtube.com/watch?v=EsGiBwK4Ycc',
    groupDate: '01.01.2020',
    groupLectureDescription: 'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more',
    groupLectureHomework: 'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more',



};
const pageCreateNewGroupSelectors = {
    groupNameInput: 'form input[name="name"]',
    groupDescriptionInput: 'form input[name="description"]',
    groupAccessTypeInput: '//select[@name=\'accessType\']',
    groupCreateButton: 'form button[type="submit"]',
    groupLinkButton: '//body//div[@class=\'col\']//div//div//div//div[1]//div[1]//div[1]//h4[1]//a[1]',
    groupCreateLectureButtonInput: '//a[@class=\'btn btn-primary\']',
    groupLectureNameInput: '//input[@name=\'name\']',
    groupYouTubeLinkInput: '//input[@name=\'video\']',
    groupDateInput: '//input[@placeholder=\'Date\']',
    groupActiveCheckboxInput: '//label[@class=\'custom-control-label\']',
    groupLectureDescriptionInput: '//textarea[@name=\'description\']',
    groupLectureHomeworkInput: '//textarea[@name=\'homework\']',
    groupLectureSaveButtonInput: '//button[@class=\'btn btn-primary\']',
    groupLectureCreateLectureButtonInput: '//a[@class=\'btn btn-primary\']',



};


const pageCreateNewCourse = {
    courseName: 'JavaScript Operators Reference',
    courseDescription: 'JavaScript operators are used to assign values, compare values, perform arithmetic operations, and more',
    courseAccessType: 'All',
};

const pageCreateNewCourseInput = {
    courseNameInput: 'input[name="name"]',
    courseDescriptionInput: 'input[name="description"]',
    courseAccessTypeInput: '//select[@name=\'accessType\']',
    clickCourseCreateButton: 'button[type="submit"]',
};


const pageCreateFlashGroup = {
    flashGroupName: 'QA5 TEST 999',
    flashGroupDescription: 'Test 1',
};

const pageCreateFlashGroupInput = {
    clickCreateNewFlashGroupButton: '//button[@class=\'btn btn-secondary\']',
    flashGroupNameInput: '//input[@name=\'name\']',
    flashGroupDescriptionInput: '//input[@name=\'description\']',
    clickFlashGroupCreateButton: '//button[@class=\'btn btn-primary\']',
};

const pageCreateQuiz = {
    quizGroupName: 'QA5 QUIZ CREATE TEST 5',
    quizGroupDescription: 'JavaScript operators are used to assign values',
    quizAcceptableMistakes: '1',
    quizQuestionName: 'WHY?',
    quizQuestionDescription: 'Above question asking you why?',
    quizReward1: 'Multi',
    quizAnswer1: 'Because',
    quizAnswer2: 'Just Because',


};

const pageCreateQuizInput = {
    clickQuestionGroupButtonInput: '//button[@class=\'btn btn-primary\']',
    quizGroupNameInput: '//input[@placeholder=\'Group name\']',
    quizGroupDescriptionInput: '//input[@placeholder=\'Group description\']',
    quizAcceptableMistakesInput: '//input[@placeholder=\'Acceptable mistakes\']',
    quizActiveButtonInput: '//input[@id=\'Active\']',
    quizSaveButtonInput: 'button[type="submit"]',
    quizQuestionNameInput: '//input[contains(@placeholder,\'Question name\')]',
    quizQuestionDescriptionInput: 'textarea[name="description"]',
    quizReward1Input: '//select[@name=\'answerType\']',
    quizAnswer1Input: 'input[name="variants[0].name"]',
    quizCorrectAnswer1Input: '//body//div[@class=\'mt-4 mt-lg-0 col-lg-12\']//div//div[1]//div[3]//div[1]//label[1]',
    quizAnswer2Input: 'input[name="variants[1].name"]',
    quizCreateButtonInput: '//button[contains(text(),\'Create\')]',
    quizEndSaveButtonInput: '//button[contains(text(),\'Save\')]',

};

const pageCreateChallenge = {
    challengeName: 'QA5 TEST 1',
    challengeProgrammingLanguage: 'JavaScript',
    challengeLevel: 'Medium',
    challengeShortDescription: 'JavaScript operators are used to assign values',
    challengeInstruction: 'JavaScript operators are used to assign values',
    challengeCompletedSolution: 'let inf = 0',
    challengeInitialSolution: 'let inf = 1',
    challengeOpenTest: 'let inf = 2',
    challengeHiddenTest: 'let inf = 3',

};

const pageCreateChallengeInput = {
    createChallengeButtonInput: '//button[@class=\'btn btn-secondary\']',
    createChallengeNameInput: '//input[@name=\'name\']',
    challengeProgrammingLanguageInput: '//select[@name=\'programmingLang\']',
    challengeLevelInput: '//select[@name=\'level\']',
    challengeShowOpenTestInput: '//label[contains(text(),\'Show open tests\')]',
    challengeCoursePurposeInput: '//label[contains(text(),\'Course Purpose\')]',
    challengeShortDescriptionInput: '//textarea[@name=\'description\']',
    challengeInstructionInput: '//textarea[@name=\'instruction\']',
    challengeCompletedSolutionInput: '//div[@class=\'codeEditor completedSolution\']//textarea[@class=\'npm__react-simple-code-editor__textarea\']',
    challengeInitialSolution: '//div[@class=\'codeEditor initialSolution\']//textarea[@class=\'npm__react-simple-code-editor__textarea\']',
    challengeOpenTestInput: '//div[@class=\'codeEditor openTest\']//textarea[@class=\'npm__react-simple-code-editor__textarea\']',
    challengeHiddenTestInput: '//div[@class=\'codeEditor hiddenTest\']//textarea[@class=\'npm__react-simple-code-editor__textarea\']',
    challengeSaveButtonInput: '//button[@class=\'mr-3 btn btn-primary\']',
};





module.exports = {HOST, URLS, pageRegister, pageRegisterSelectors, pageDayReportSelectors, pageCreateNewGroup,
    pageCreateNewGroupSelectors, pageCreateNewCourse, pageCreateNewCourseInput, pageCreateFlashGroup, pageCreateFlashGroupInput,
    pageCreateQuiz, pageCreateQuizInput, pageCreateChallenge, pageCreateChallengeInput};