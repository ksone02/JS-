function solution(numbers) {
    var answer = numbers.map(function(numbers) {
        var str = numbers.toString();
        return str;
    }).sort(function(a,b) {
        var c = (b+a) - (a+b);
        return c;
    }).join('');
    
    if (answer[0] == "0") {
        return "0";
    }

    return answer;