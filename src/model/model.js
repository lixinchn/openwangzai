import Skill from './setting/skill';
import Interaction from './setting/interaction';
import Configuration from './setting/configuration';


export default class OpenWangZaiConfig {
    constructor(strSkillType, strLanguage, strApplicationID, strName, strInvocationName,
        strIntents, strCustomSlotTypes, strUtterances, strEndpoint) {
        this.skill = new Skill(strSkillType, strLanguage, strApplicationID, strName, strInvocationName);
        this.interaction = new Interaction(strIntents, strCustomSlotTypes, strUtterances);
        this.configuration = new Configuration(strEndpoint);
    }
}
