function findNumberOfMatchesPlayedPerYear(matches){
const NoOfMatchesPlayedByYear=new Map();
for(let i=0;i<matches.length;i++){
            let year = matches[i].season;
            if (NoOfMatchesPlayedByYear.has(year)) {
                NoOfMatchesPlayedByYear.set(year, NoOfMatchesPlayedByYear.get(year) + 1);
            } else {
                NoOfMatchesPlayedByYear.set(year, 1);
            }
        }
        let totalNumberOfMatchesPlayedPerYear = {};
        for (let [key, value] of NoOfMatchesPlayedByYear) {
            totalNumberOfMatchesPlayedPerYear[key] = value;
        }
        let jsonOutput = JSON.stringify(totalNumberOfMatchesPlayedPerYear, null, 2);
        return jsonOutput;
}
module.exports=findNumberOfMatchesPlayedPerYear;