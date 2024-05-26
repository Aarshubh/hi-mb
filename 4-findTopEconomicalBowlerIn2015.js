function findTopEconomicalBowlerIn2015(matchData,deliveryData){
const matchIdOf2015=new Set();
const listOfBowlerNamesWithTotalRuns=[];
const noOfBallsByBowler=new Map();
const totalRunsGivenByBowler=new Map();
const economyByBowler=new Map();

for (let i=0;i<matchData.length;i++) {
            const year = matchData[i].season;
            const matchId = matchData[i].id;

            if (year==="2015") {
                matchIdOf2015.add(matchId);
            }
        }

        for (let j=0;j<deliveryData.length;j++) {
            const deliveryId = deliveryData[j].match_id;
            const bowlerName = deliveryData[j].bowler;
            const totalRuns = deliveryData[j].total_runs;

            if (matchIdOf2015.has(deliveryId)) {
               listOfBowlerNamesWithTotalRuns.push(bowlerName);
               listOfBowlerNamesWithTotalRuns.push(totalRuns);
            }
        }

        for (let listIndex = 0; listIndex < listOfBowlerNamesWithTotalRuns.length - 1; listIndex = listIndex + 2) {
             let str = listOfBowlerNamesWithTotalRuns[listIndex];
             if (noOfBallsByBowler.has(str)) {
                noOfBallsByBowler.set(str, noOfBallsByBowler.get(str) + 1.0);
             } else {
               noOfBallsByBowler.set(str, 1.0);
             }
        }
        noOfBallsByBowler.forEach((value, key, map) => {
            map.set(key, value / 6);
        });

        for (let listIndex = 0; listIndex < listOfBowlerNamesWithTotalRuns.length - 1; listIndex = listIndex + 2) {

            let str = listOfBowlerNamesWithTotalRuns[listIndex];
             let temp = parseInt(listOfBowlerNamesWithTotalRuns[listIndex + 1]);
             if (totalRunsGivenByBowler.has(str)) {
                 totalRunsGivenByBowler.set(str, totalRunsGivenByBowler.get(str) + temp);
             } else {
                totalRunsGivenByBowler.set(str, temp);
             }
        }

        for (let bowlerName of noOfBallsByBowler.keys()) {
            let over = noOfBallsByBowler.get(bowlerName);
            let totalRuns = totalRunsGivenByBowler.get(bowlerName);
            let economy = 0;
            if (over !== 0) {
               economy = totalRuns / over;
            }
            economyByBowler.set(bowlerName, economy);
        }

        let smallestValue=Infinity;
        let smallestKey;
        economyByBowler.forEach((value, key) => {
        if (value < smallestValue) {
           smallestValue = value;
           smallestKey = key;
        }});
        //console.log(smallestKey + '=>' + smallestValue);
        return (smallestKey + '=>' + smallestValue);
}
module.exports = findTopEconomicalBowlerIn2015;