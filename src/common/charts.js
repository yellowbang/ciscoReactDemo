import Colors from '../common/colors';
//import at from 'lodash/at';

/**
 * General charting utilities.
 */
class Charts {
}

/**
 * Transform a collection of objects each containing a stats collection, to conform to charting api.
 *
 * statsValueProp can be a common delimited list of property anems.
 *
 * @param {Array} entries - a collection of objects, each with a 'stats' collection
 * @param {String} seriesIdProp - name of the property that holds the chart series id.
 * @param {String} statsValueProp - name of the property or properties within stats objects that form the set of values for each series.
 * @returns {Array} transformed data as an array of object, where each object property represents a value for one of the series.
 */
Charts.transformStatsResponse = function(entries, seriesIdProp, statsValueProp) {
    let s = [], d = [], h = {};

    let statsValueProps = statsValueProp.split(/[ ,]+/);

    // entries.length determines the number of properties in each object within the array s.
    for (let i = 0; i < entries.length; i++) {
        // stats.length determines how many objects in the array s
        for (let j = 0; j < entries[i].stats.length; j++) {
            let ts = entries[i].stats[j].timestamp;
            let o = h[ts];
            if (!o) {
                o = {
                    timestamp: ts
                };
                h[ts] = o;
                d.push(o);
            }

            for (let k = 0, kl = statsValueProps.length; k < kl; k++) {
                o[entries[i][seriesIdProp] + statsValueProps[k]] = entries[i].stats[j][statsValueProps[k]];
            }
        }

        for (let k = 0, kl = statsValueProps.length; k < kl; k++) {
            s.push({
                name: entries[i][seriesIdProp] + [statsValueProps[k]],
                seriesId: entries[i][seriesIdProp]
            });
        }
    }


    return {
        series: s,
        data: d
    };
};

// / Series color generation
const seriesColors = [], colorCount = 20;
let clr = '#8884d8'; // start color

seriesColors.push(clr);
for (let i = 0; i < colorCount - 1; i++) {
    clr = Colors.shiftRgb(clr, 50 + Math.ceil(50 * i / colorCount));
    seriesColors.push(clr);
}

/**
 * Get the appropriate color for a series, given its index position.
 *
 * @param {Number} index within the order of series
 * @returns {String} css color specification.
 */
Charts.seriesColor = function(seriesIndex) {
    return seriesColors[seriesIndex % colorCount];
};

Charts.defaultHeight = 300;


export default Charts;
