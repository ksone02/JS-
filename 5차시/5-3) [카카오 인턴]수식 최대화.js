function solution(expression) {
    let answer = [];
    const cases = [
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
        ['+', '-', '*'],
        ['+', '*', '-']
    ];
    
    for(let i = 0; i < cases.length; i++) {
        let arr = expression.split(/(\D)/); //정규식 -> 숫자와 연산자 분리
        for(let j = 0; j < 3; j++) {
            while(arr.includes(cases[i][j])) {
                let index = arr.indexOf(cases[i][j]);
                arr.splice(index-1, 3, (new Function(`return ${arr.slice(index-1, index+2).join('')}`))());
              // index-1 인덱스에서 3개 삭제 후 new Function 반환값 추가
              // `${}` -> 안의 문자열 계산 ex) "340+10" => 350반환
            }
        }
        answer.push(arr);
    }
    
    return Math.max(...answer.map(num => Math.abs(num))); //절댓값 고려, 최댓값 산출
}