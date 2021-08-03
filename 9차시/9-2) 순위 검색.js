//try1 => 정확성 100, 효율성 0
function solution(info, query) {
    var answer = [];
    var newInfo = [];
    var newQuery = [];
    for(let i in info) {
        newInfo.push(info[i].split(" "));
    }
    for(let i in query) {
        newQuery.push(query[i].replace(/ and /g, " ").split(" "));
    }
    
    for(let i in newQuery) {
        var a = 0;
        for(let j in newInfo) {
            var count = 0;
            if((newInfo[j][0] === newQuery[i][0] || "-" === newQuery[i][0]) && (newInfo[j][1] === newQuery[i][1] || "-" === newQuery[i][1]) && (newInfo[j][2] === newQuery[i][2] || "-" === newQuery[i][2]) && (newInfo[j][3] === newQuery[i][3] || "-" === newQuery[i][3]) && (parseInt(newInfo[j][4]) >= parseInt(newQuery[i][4]))) {
                a++;
            } else {
                continue;
            }    
        }
        answer.push(a);
    }
    
    return answer;
}

//try2
