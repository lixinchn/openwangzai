export default class Utterances {
    constructor(strUtterances) {
        let arrUtterancesUnpured = strUtterances.split('\n');
        this.m_arrUtterances = this.parseUtterances(arrUtterancesUnpured);
        // console.log(this.utterances);
    }

    parseUtterances(arrUtterancesUnpured) {
        // 例子: [intent]从搜狗查询{location}{date}的天气
        /*
        let utterances = arrUtterances.filter(utterance => {
            if (!utterance)
                return;

            let rightBracket = utterance.indexOf(']');
            let intent = utterance.substring(1, rightBracket);
            let realUtterance = utterance.slice(rightBracket + 1)
            return {
                'intent': intent,
                'realUtterance': realUtterance,
            };
        });
        */

        let arrUtterances = [];
        for (let utterance of arrUtterancesUnpured) {
            if (!utterance)
                continue;

            let rightBracket = utterance.indexOf(']');
            let intent = utterance.substring(1, rightBracket);
            let realUtterance = utterance.slice(rightBracket + 1);
            // console.log(realUtterance);
            let slotNames = this.parseSlotsName(realUtterance);
            arrUtterances.push({
                'intent': intent,
                'realUtterance': realUtterance,
                'reg': new RegExp(realUtterance.replace(/\{.*?\}/gi, '(.*)?')),
                'slotNames': slotNames,
            });
        }
        return arrUtterances;
    }

    parseSlotsName(realUtterance) {
        let arrSlots = [];
        let parseStatus = false;
        let slot = '';

        for (let char of realUtterance) {
            if (char === '{') {
                parseStatus = true;
            } else if (char === '}' && parseStatus) {
                parseStatus = false;
                arrSlots.push(slot);
                slot = '';
            } else if (parseStatus) {
                slot += char;
            }
        }
        return arrSlots;
    }
}
