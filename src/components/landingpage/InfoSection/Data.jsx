export const homeObjOne = {
  id: "upload",
  to: "translation",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Upload a Picture",
  headline: "Image-to-text Japanese",
  description: `Provide a JPG file or a image url and get access to the power of image-to-text recognation. Works for documents AND images`,
  buttonLabel: "Upload A Picture",
  imgStart: true,
  img: require("../../../main_page_images/thousand_gate_shrine.jpg"),
  alt: "thousand_gate_shrine",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "translation",
  to: "tokenizing",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Text Translation",
  headline: "Provides Japanese Text Translation for English Only Speakers",
  description:
    "Utilizes the best Japanese to English translations available. Handles Japanese to English phrasing of idioms and complex turns of phrases. Superior to Google-Translate for literiary works.",
  buttonLabel: "Translate Image Text",
  imgStart: false,
  img: require("../../../main_page_images/city.jpg"),
  alt: "City",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "tokenizing",
  to: "profiles",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Text Tokenization and Phrasing",
  headline: "Provides tokenization for intermediate Japanese learners",
  description:
    "Uses machine learning algorythms to tokenize Japanese text into morphemes. Allows learners to interpret complex Japanese particles, clauses and grammical devices.",
  buttonLabel: "Phrase Native Text",
  imgStart: true,
  img: require("../../../main_page_images/written_works.jpg"),
  alt: "Written",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: "profiles",
  to: "home",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Persistent Storage",
  headline: "Saves images and data",
  description:
    "Provides a user profile that stores images, raw text, translations and tokenized Japanese. Data can be updated or altered based on user inputs.",
  buttonLabel: "Sign Me Up!",
  imgStart: false,
  img: require("../../../main_page_images/menu.jpg"),
  alt: "Menu",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjFive = {
  id: "upload",
  to: "translation",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Learning Japanese",
  headline: "The Challenges of Japanese",
  description:   
  `Japanese is a notoriously difficult language to learn. The United States Foreign Service Institute ranks Japanese as the hardest language for learners.
  It took me thousands of hours before I felt that I could "read". I have since read numerous novels and yet I feel nowhere near where I want to be. 
  However, Natural Language Processing has provided a means to implement tools such as hover dictionaries and text parsers. I utilized these tools when I learned to read. 
  I saw an opportunity to understand and implement Natural Language Processing tools while developing a useful application to assist Japanese learners as they encounter Japanese in the wild.`,
  buttonLabel: "これソフト",
  imgStart: false,
  img: require("../../../main_page_images/shop-front.jpg"),
  alt: "thousand_gate_shrine",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjSix = {
  id: "translation",
  to: "tokenizing",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "This App",
  headline: "What is Tokenization, OCR and Translation?",
  description:
  `Tokenization is the process of breaking down sentences into base parts for Natural Language Processing techniques. 
  Japanese is unique where there are no spaces, there are 3 different alphabets and there are many different kanji combinations to construct the same vocabulary. Pronunciations change depending 
  on the writer, context and situation. Conjugations and particles are used extensively to modify actions and tenses. For these reasons, simple tokenization techniques cannot be used and a morphological approach is required.
  OCR is utilized to recognize text from images as phone dictionary's require knowing kanji and correct stroke order for input. Alternatively, you must somehow already know the spelling without furigana. 
  Lastly Japanese to English translations are not 1-1 due to the grammatical differences and pro-drop nature of Japanese. However, they remain helpful for learners and are provided.`,
  buttonLabel: "未来",
  imgStart: true,
  img: require("../../../main_page_images/shop-girl.jpg"),
  alt: "City",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjSeven = {
  id: "tokenizing",
  to: "profiles",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "App Developments",
  headline: "The App and The Future",
  description:
  `This application was built utilizing JavaScript, CSS and Python. React, ExpressJS and MongoDB make up the full stack application. The website is secured with a modern passport implementation.
  This application is deployed utilizing Docker and a Google Cloud Compute Engine virtual machine. The back end utilizes a MeCab wrapped Natural Language Processing Tokenizer trained with a Japanese dictionary. 
  The OCR utilizes Google's Vision AI. Translation is done via DeepL, which handles idioms and turns-of-phrases well. Plans for future implementation include Anki integration, a JMdict Japanese to English dictionary for 
  tokenized roots, Korean capability for MeCab and implementing Tesseract OCR`,
  buttonLabel: "ソフトウェア開発者",
  imgStart: false,
  img: require("../../../main_page_images/treewalk.jpg"),
  alt: "About Me",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjEight = {
  id: "profiles",
  to: "home",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "About Me",
  headline: "",
  description:
  `I am a highly competitive triathlete and Mechanical Engineer who worked in the Oil and Gas sector. 
  During Covid I decided to teach myself Japanese while races were cancelled. 
  I quickly realized I was wasting time in a dead industry run by dinasours. 
  I love to learn and I put my money where my mouth is. That's when I decided to pursue Software Engineering.`
  ,
  buttonLabel: "行きましょう",
  imgStart: true,
  img: require("../../../main_page_images/me.jpg"),
  alt: "Menu",
  dark: true,
  primary: true,
  darkText: false,
};
