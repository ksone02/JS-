function solution(clothes) {
    var obj = 0;
    
    var k = clothes.map(e => e.pop());
    
    if(k.length != 1) {
        var counted = k.reduce(function (all, el) {
          if (el in all) {
            all[el]++;
          }
          else {
            all[el] = 1;
          }
          return all;
        }, {});

        obj = Object.values(counted).reduce((m,n) => m*n);
    }
    
    return k.length + obj;
} //이거 되는 경우, 안되는 경우가 있음 왜안되지;; 다시풀자


function solution(clothes) {
    var k = clothes.map(e => e.pop()); //의상종류만
    
    var counted = k.reduce(function (all, el) {
          if (el in all) {
            all[el]++;
          }
          else {
            all[el] = 1;
          }
          return all;
    }, {}); //객체 개수 리턴 {:2,:1...}

    var obj = Object.values(counted).map(e => e+1).reduce((m,n) => m*n); //(겹쳐입는경우 + 혼자입는경우) * 나머지

    return obj - 1; //하나만입는경우
}

