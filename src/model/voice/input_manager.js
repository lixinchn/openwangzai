import Input from './input';
import SettingManager from '../setting/setting_manager';


export default class InputManager {
    constructor(strText, strApplicationId, strLocale) {
        this.m_strInput = new Input(strText);
        this.m_strApplicationId = strApplicationId;
        this.m_strLocale = strLocale;
    }

    findUtterancesUsingApplicationId(strApplicationId) {
        return SettingManager.findUtterancesUsingApplicationId(strApplicationId);
    }

    findIntent(strText, arrUtterances) {
        // TODO: split sentence
        let intentAndSlot = {};
        for (let utterance of arrUtterances) {
            let matchesArray = strText.match(utterance.reg);
            if (matchesArray) {
                intentAndSlot.intent = utterance.intent;
                intentAndSlot.slot = {
                    'value': matchesArray[1],
                    'slotName': utterance.slotNames[0],
                };
                break;
            }
        }
        return intentAndSlot || null;
    }
}
