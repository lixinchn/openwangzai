export default class IntentSchema {
    constructor(strIntents, strCustomSlotTypes) {
        this.intents = JSON.parse(strIntents);
        this.customSlotTypes = JSON.parse(strCustomSlotTypes);
    }
}
