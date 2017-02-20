import {parseStringToEnum} from '../util/model_util';


export default class Skill {
    constructor(strSkillType, strLanguage, strApplicationID, strName, strInvocationName) {
        this.m_eSkillType = this.parseSkillType(strSkillType); // skill type
        this.m_eLanguage = this.parseLanguage(strLanguage); // language of your skill
        this.strApplicationID = strApplicationID;
        this.strName = strName; // name of the skill that is displayed to customers
        this.strInvocationName = strInvocationName; // the name customers use to activate the skill
    }

    parseSkillType(strSkillType) {
        return parseStringToEnum(strSkillType.toUpperCase(), Skill.SKILL_TYPE);
    }

    parseLanguage(strLanguage) {
        return parseStringToEnum(strLanguage.toUpperCase(), Skill.LANGUAGE);
    }
}

Skill.SKILL_TYPE = {
    CUSTOM: 0,
    SMART_HOME: 1,
    FLASH_BRIEFING: 2,
};

Skill.LANGUAGE = {
    CHINESE: 0,
    ENGLISH: 1,
}
