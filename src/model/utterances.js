export default class Utterances {
    constructor(strUtterances) {
        let arrUtterances = strUtterances.split('\n');
        this.utterances = this.parseUtterances(arrUtterances);
    }

    parseUtterances(arrUtterances) {
        // 例子: [intent]从搜狗查询{location}{date}的天气
        return arrUtterances.filter(utterance => {
            if (!utterance)
                return false;

            let rightBracket = utterance.indexOf(']');
            let intent = utterance.substring(1, rightBracket);
            let realUtterance = utterance.slice(rightBracket + 1)
            return {
                'intent': intent,
                'realUtterance': realUtterance,
            };
        });
    }
}
