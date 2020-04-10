function allPossibleCases(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        let result = [];
        let allCasesOfRest = allPossibleCases(arr.slice(1));
        for (let i = 0; i < allCasesOfRest.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + " " + allCasesOfRest[i]);
            }
        }
        return result;
    }
}

function isEven(str){
    if(parseInt(str)%2 === 0) return true;

    return false;
}

function checkSchedules(scheduleList) {
    let removeIndexes = []

    for(let schedules of scheduleList){
        // [weekDays, turn, time]
        let matches = []

        for(let schedule of schedules){
            const m = schedule.match(/(\d+)(M|T|N)(\d+)/);

            matches.push([m[1], m[2], m[3]]);
        }

        for(let i = 0; i < schedules.length - 1; ++i){
            for(let j = 0; j < schedules.length; ++j){
                if(i === j) continue;

                if(matches[i][1] === matches[j][1]){

                    for(let day of matches[i][0]){
                        if(matches[j][0].split('').includes(day)){
                            if(matches[i][2].includes(matches[j][2]) || matches[j][2].includes(matches[i][2])){
                                removeIndexes.push(scheduleList.indexOf(schedules))
                                break
                            }     
                        }
                    }
                }
            }
        }
    }

    for(let i = removeIndexes.length - 1; i >= 0; --i)
        scheduleList.splice(removeIndexes[i], 1)
        

    return scheduleList;
}

function generateTable (schedules, disciplines) {
    let table = [
        {' ': 'M12', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'M34', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'M56', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'T12', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'T34', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'T56', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'N12', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''},
        {' ': 'N34', 'seg': '', 'ter': '', 'qua': '', 'qui': '', 'sex': ''}
    ]

    for(let schedule of schedules){
        const matches = schedule.match(/(\d+)(M|T|N)(\d+)/);
        const weekDays = matches[1].split('');
        const turn = matches[2];
        let times = [];

        for(let i = 0; i < matches[3].length; i++){
            if(isEven(matches[3][i])) times.push(matches[3][i]);
            else { 
                if(matches[3][i+1] !== undefined){ times.push(matches[3][i] + matches[3][i+1]); i++;} 
                else times.push(matches[3][i]);
            }
        }

        for(let time of times){
            for(let row of table){
                if(row[' '].includes(turn) && row[' '].includes(time)){
                    for(let day of weekDays){
                        switch(day){
                            case '2': row['seg'] = disciplines[schedules.indexOf(schedule)]; break;
                            case '3': row['ter'] = disciplines[schedules.indexOf(schedule)]; break;
                            case '4': row['qua'] = disciplines[schedules.indexOf(schedule)]; break;
                            case '5': row['qui'] = disciplines[schedules.indexOf(schedule)]; break;
                            case '6': row['sex'] = disciplines[schedules.indexOf(schedule)]; break;
                            default: break;
                        }
                    }
                }
            }
        }
    }

    return table;
}

export {
    allPossibleCases,
    checkSchedules,
    generateTable
}