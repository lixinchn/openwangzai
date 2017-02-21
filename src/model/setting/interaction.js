import IntentSchema from './intent_schema';
import Utterances from './utterances';


export default class Interaction {
    constructor(strIntents, strCustomSlotTypes, strUtterances) {
        this.intentSchema = new IntentSchema(strIntents, strCustomSlotTypes);
        this.utterances = new Utterances(strUtterances);
    }
}
