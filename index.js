const csv = require('csv-parser');
const fs = require('fs');
const findNumberOfMatchesPlayedPerYear = require('./1-findNumberOfMatchesPlayedPerYear.js');
const findNumberOfMatchesWonByAllTeams = require('./2-findNumberOfMatchesWonByAllTeams.js');
const findExtraRunsConcededPerTeamIn2016 = require('./3-findExtraRunsConcededPerTeamIn2016');
const findTopEconomicalBowlerIn2015 = require('./4-findTopEconomicalBowlerIn2015');

function matchesData(location) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(location)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

function deliveryData(location) {
    return new Promise((resolve, reject) => {
        const resultList = [];
        fs.createReadStream(location)
            .pipe(csv())
            .on('data', (data) => resultList.push(data))
            .on('end', () => {
                resolve(resultList);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

(async () => {
    try {
        const results = await matchesData('src/data/matches.csv');
        const resultList=await deliveryData('src/data/deliveries.csv')

       fs.writeFileSync('./src/public/findNumberOfMatchesPlayedPerYear.json',findNumberOfMatchesPlayedPerYear(results));
       fs.writeFileSync('./src/public/findNumberOfMatchesWonByAllTeams.json',findNumberOfMatchesWonByAllTeams(results));
       fs.writeFileSync('./src/public/findExtraRunsConcededPerTeamIn2016.json',findExtraRunsConcededPerTeamIn2016(results,resultList));
       fs.writeFileSync('./src/public/findTopEconomicalBowlerIn2015.json',findTopEconomicalBowlerIn2015(results,resultList));
    } catch (error) {
        console.error('Error reading CSV:', error);
    }
})();