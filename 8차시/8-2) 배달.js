function solution(N, road, K) {
    var answer = 0;
    var k = [];
    var check = []
    for(var i = 1; i <= N; i++) {
        if(i === 1) answer++;
        else {
            var newArr= road.filter(v => v[0] == 1 && v[1] == i || v[0] == i && v[1] == 1);
            if(newArr.length > 0) {
                check[i] = new Vil(i);
                for(var l = 0; l < newArr.length; l++) {
                    check[i].dist.push(newArr[l][2]);
                }
                answer++
            } else {
                var newArr2 = road.filter(v => v[0] == i || v[1] == i);
                for(var j = 0; j < newArr2.length; j++){
                    var targetVil = newArr2[j][1] === i ? newArr2[j][0] : newArr2[j][1] 
                    var targetVilDis = newArr2[j][2];
                    check.filter()
                }
                
            }
        }
    }
    return check;
}

function Vil(num) {
    this.num = num;
    this.dist = [];
}

//객체로 접근 해보기,, 어렵다,,! 배열로 정리 하고 싶은데 잘 안 되네