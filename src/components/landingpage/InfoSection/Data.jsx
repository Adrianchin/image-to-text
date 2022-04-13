export const homeObjOne = {
    id: 'upload',
    to: "translation",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Upload a Picture',
    headline: 'Image-to-text Japanese',
    description: `Provide a JPG file or a image url and get access to the power of image-to-text recognation. Works for documents AND images`,
    buttonLabel: 'Upload A Picture',
    imgStart: true,
    img: require('../../../main_page_images/thousand_gate_shrine.jpg'),
    alt: 'thousand_gate_shrine',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'translation',
    to: "tokenizing",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Text Translation',
    headline: 'Provides Japanese Text Translation for English Only Speakers',
    description: 'Utilizes the best Japanese to English translations available. Handles Japanese to English phrasing of idioms and complex turns of phrases. Superior to Google-Translate for literiary works.',
    buttonLabel: 'Translate Image Text',
    imgStart: false,
    img: require('../../../main_page_images/city.jpg'),
    alt: 'City',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'tokenizing',
    to: "profiles",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Text Tokenization and Phrasing',
    headline: 'Provides tokenization for intermediate Japanese learners',
    description: 'Uses machine learning algorythms to tokenize Japanese text into morphemes. Allows learners to interpret complex Japanese particles, clauses and grammical devices.',
    buttonLabel: 'Phrase Native Text',
    imgStart: true,
    img: require('../../../main_page_images/written_works.jpg'),
    alt: 'Written',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjFour = {
    id: 'profiles',
    to: "home",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Persistent Storage',
    headline: 'Saves images and data',
    description: 'Provides a user profile that stores images, raw text, translations and tokenized Japanese. Data can be updated or altered based on user inputs.',
    buttonLabel: 'Sign Me Up!',
    imgStart: false,
    img: require('../../../main_page_images/menu.jpg'),
    alt: 'Menu',
    dark: true,
    primary: true,
    darkText: false
};
