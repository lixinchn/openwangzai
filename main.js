import OpenWangZaiConfig from './src/model/model';
import InputManager from './src/model/voice/input_manager';


let intents = '{"intents":[{"intent":"AnswerIntent","slots":[{"name":"Answer","type":"LIST_OF_ANSWERS"}]},{"intent":"AnswerOnlyIntent","slots":[{"name":"Answer","type":"LIST_OF_ANSWERS"}]},{"intent":"AMAZON.StartOverIntent"},{"intent":"DontKnowIntent"},{"intent":"AMAZON.RepeatIntent"},{"intent":"AMAZON.HelpIntent"},{"intent":"AMAZON.YesIntent"},{"intent":"AMAZON.NoIntent"},{"intent":"AMAZON.StopIntent"},{"intent":"AMAZON.CancelIntent"},{"intent":"AMAZON.PauseIntent"},{"intent":"AMAZON.ResumeIntent"}]}';
let customTypes = '{"LIST_OF_ANSWERS":["Actinium","Aluminum","Americium","Antimony","Argon","Arsenic","Astatine","Barium","Berkelium","Beryllium","Bismuth","Bohrium","Boron","Bromine","Cadmium","Calcium","Californium","Carbon","Cerium","Cesium","Chlorine","Chromium","Cobalt","Copper","Curium","Darmstadtium","Dubnium","Dysprosium","Einsteinium","Erbium","Europium","Fermium","Fluorine","Francium","Gadolinium","Gallium","Germanium","Gold","Hafnium","Hassium","Helium","Holmium","Hydrogen","Indium","Iodine","Iridium","Iron","Krypton","Lanthanum","Lawrencium","Lead","Lithium","Lutetium","Magnesium","Manganese","Meitnerium","Mendelevium","Mercury","Molybdenum","Neodymium","Neon","Neptunium","Nickel","Niobium","Nitrogen","Nobelium","Osmium","Oxygen","Palladium","Phosphorus","Platinum","Plutonium","Polonium","Potassium","Praseodymium","Promethium","Protactinium","Radium","Radon","Rhenium","Rhodium","Roentgenium","Rubidium","Ruthenium","Rutherfordium","Samarium","Scandium","Seaborgium","Selenium","Silicon","Silver","Sodium","Strontium","Sulfur","Tantalum","Technetium","Tellurium","Terbium","Thallium","Thorium","Thulium","Tin","Titanium","Tungsten","Ununbium","Ununhexium","Ununoctium","Ununpentium","Ununquadium","Ununseptium","Ununtrium","Ununium","Uranium","Vanadium","Xenon","Ytterbium","Yttrium","Zinc","Zirconium"]}';
let strUtterances = "[AnswerIntent]the answer is {Answer}\n[AnswerIntent]my answer is {Answer}\n[AnswerIntent]is it {Answer}\n[AnswerIntent]{Answer} is my answer\n[AnswerOnlyIntent]{Answer}\n\n[AMAZON.StartOverIntent]start game\n[AMAZON.StartOverIntent]new game\n[AMAZON.StartOverIntent]start\n[AMAZON.StartOverIntent]start new game\n\n[DontKnowIntent]i don't know\n[DontKnowIntent]don't know\n[DontKnowIntent]skip\n[DontKnowIntent]i don't know that\n[DontKnowIntent]who knows\n[DontKnowIntent]i don't know this question\n[DontKnowIntent]i don't know that one\n[DontKnowIntent]dunno";

let conf = new OpenWangZaiConfig('Custom', 'Chinese', 'sogourobot.skill.777777', 'nocturne', 'nocturne',
        intents, customTypes, strUtterances, 'HTTP');

// console.log(conf.interaction.utterances);
let inputManager = new InputManager('the answer is Americium', 'test', 'en_US');
let utterances = inputManager.findUtterancesUsingApplicationId(inputManager.m_strApplicationId);
let intentAndSlot = inputManager.findIntent(inputManager.m_strInput.m_strText, utterances.m_arrUtterances);
console.log(intentAndSlot);
