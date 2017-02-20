import Skill from './skill';
import Interaction from './interaction';
import Configuration from './configuration';


export default class OpenWangZaiConfig {
    constructor(strSkillType, strLanguage, strApplicationID, strName, strInvocationName,
        strIntents, strCustomSlotTypes, strUtterances, strEndpoint) {
        this.skill = new Skill(strSkillType, strLanguage, strApplicationID, strName, strInvocationName);
        this.interaction = new Interaction(strIntents, strCustomSlotTypes, strUtterances);
        this.configuration = new Configuration(strEndpoint);
    }
}
