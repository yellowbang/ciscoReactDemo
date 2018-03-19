import moment from 'moment';

/**
 * Returns a list of timestamp ISO strings between fromTimestamp and toTimestamp of expectedTotalSamples size
 * @param fromTimestamp {String} ISO date
 * @param toTimestamp {String} ISO date
 * @param expectedTotalSamples {Integer}
 * @returns {Array}
 */

function getTimestampsRange(fromTimestamp, toTimestamp, expectedTotalSamples = 10) {
    let startMs = Math.min(moment(fromTimestamp).valueOf(), moment(toTimestamp).valueOf());
    let endMs = Math.max(moment(fromTimestamp).valueOf(), moment(toTimestamp).valueOf());

    let diff = endMs - startMs;
    let res = [];
    for (let i = 0; i < expectedTotalSamples; i++) {
        res.push(moment(startMs + ((diff / expectedTotalSamples) * i)).toISOString());
    }
    return res;
}

export {getTimestampsRange};
