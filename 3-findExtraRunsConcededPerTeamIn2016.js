function findExtraRunsConcededPerTeamIn2016(matchData,deliveryData){
const ExtraRunsByTeamConceded=new Map();
const matchIdOf2016=new Set();
const listOfBowlingTeamAndExtraRuns=[];

for (let i=0;i<matchData.length;i++) {
            const year = matchData[i].season;
            const matchId = matchData[i].id;
            if (year==="2016") {
                matchIdOf2016.add(matchId);
            }
        }

        for (let j=0;j<deliveryData.length;j++) {
            const deliveryId = deliveryData[j].match_id;
            const bowlingTeam = deliveryData[j].bowling_team;
            const extraRuns = deliveryData[j].extra_runs;
            if (matchIdOf2016.has(deliveryId)) {
                listOfBowlingTeamAndExtraRuns.push(bowlingTeam);
                listOfBowlingTeamAndExtraRuns.push(extraRuns);
            }
        }

         for (let listIndex = 0; listIndex < listOfBowlingTeamAndExtraRuns.length - 1; listIndex = listIndex + 2) {
                    let bowlingTeam = listOfBowlingTeamAndExtraRuns[listIndex];
                    let extraRunsCount = parseInt(listOfBowlingTeamAndExtraRuns[listIndex + 1]);
                    if (ExtraRunsByTeamConceded.has(bowlingTeam)) {
                        ExtraRunsByTeamConceded.set(bowlingTeam, ExtraRunsByTeamConceded.get(bowlingTeam) + extraRunsCount);
                    } else {
                        ExtraRunsByTeamConceded.set(bowlingTeam, extraRunsCount);
                    }
                }
               let extraRunsByBowlingTeam = {};
                       for (let [key, value] of ExtraRunsByTeamConceded) {
                           extraRunsByBowlingTeam[key] = value;
                       }
                       let jsonOutput = JSON.stringify(extraRunsByBowlingTeam, null, 2);
                       return jsonOutput;



}
module.exports = findExtraRunsConcededPerTeamIn2016;