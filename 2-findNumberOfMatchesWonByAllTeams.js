function findNumberOfMatchesWonByAllTeams(matches){
const noOfTimesMatchesWonByTeams=new Map();
for(let i=0;i<matches.length;i++){
            let winnerTeam = matches[i].winner;
            if (noOfTimesMatchesWonByTeams.has(winnerTeam)) {
                noOfTimesMatchesWonByTeams.set(winnerTeam, noOfTimesMatchesWonByTeams.get(winnerTeam) + 1);
            } else {
                noOfTimesMatchesWonByTeams.set(winnerTeam, 1);
            }
        }
       let totalNumberOfMatchesWonByAllTeams = {};
               for (let [key, value] of noOfTimesMatchesWonByTeams) {
                   totalNumberOfMatchesWonByAllTeams[key] = value;
               }
               let jsonOutput = JSON.stringify(totalNumberOfMatchesWonByAllTeams, null, 2);
               return jsonOutput;
}
module.exports = findNumberOfMatchesWonByAllTeams;