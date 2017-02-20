import parseStringToEnum from '../util/model_util';


class Skill {
    constructor(strSkillType, strLanguage, applicationID, name, invocationName) {
        this.m_eSkillType = this.parseSkillType(strSkillType); // skill type
        this.m_eLanguage = this.parseLanguage(strLanguage); // language of your skill
        this.applicationID = applicationID;
        this.name = name; // name of the skill that is displayed to customers
        this.invocationName = invocationName; // the name customers use to activate the skill
    }

    parseSkillType(strSkillType) {
        return parseStringToEnum(strSkillType, Skill.SKILL_TYPE);
    }

    parseLanguage(strLanguage) {
        return parseStringToEnum(strLanguage, Skill.LANGUAGE);
    }
}

Skill.SKILL_TYPE = {
    CUSTOM_SKILLS: 0,
    SMART_HOME_SKILLS: 1,
    FLASH_BRIEFING_SKILLS: 2,
};

Skill.LANGUAGE = {
    CHINESE: 0,
    ENGLISH: 1,
}
