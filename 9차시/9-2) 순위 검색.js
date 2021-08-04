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
function solution(info, query) {
    var answer = [];
    
    for(let i = 0; i < 1; i++) {
        var newInfo = [];
        var newArr = info[i].split(" ");
        var count = newArr.pop();
        for(let j = 0; j <= newArr.length; j++) {
            newInfo.push(combination(newArr, j));
        }
        var b = newInfo.flat();
    }
    
    return b;
}

function combination(arr, num) {
    var result = [];
    if(num === 1) return arr.map((value) => [value]);
    
    arr.forEach((value, index, origin) => {
        const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
        const combinations = combination(rest, num - 1); // 나머지에 대해서 조합을 구한다.
        const attached = combinations.map((combination) => [value, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
        result.push(...attached); // 배열 spread syntax 로 모두다 push
    })
    
    return result;
}

//노답이네;;; 풀기 싫어진다;;
