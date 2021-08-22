function solution(str1, str2) {
    var answer = 0;
    
    var arr1 = clearStr(str1);
    var arr2 = clearStr(str2);
    
    var 교집합 = arr1.filter(x => arr2.includes(x));
    console.log(교집합);
    var 합집합 = arr1.length >= arr2.length ? arr1.concat(arr1.filter(x => !arr2.includes(x))) : arr2.concat(arr1.filter(x => !arr2.includes(x)));
    console.log(합집합);
    
    if(arr1.length === 0 && arr2.length === 0) {
        return 1 * 65536;
    } else {
        return Math.floor((교집합.length / 합집합.length) * 65536);
    }
    
}

function clearStr(str) {
    var newArr = str.split('').map(v=> v.toLowerCase());
    
    newArr = newArr.map((v,i) => v + newArr[i+1]);
    

    for(let i = 0; i < newArr.length; i++) {
        var expression = /^[a-z]*$/;
        if(!expression.test(newArr[i]) || newArr[i].includes('undefined')) {
            newArr.splice(i, 1);
            i--;
        }
    }
    
    return newArr;
}
//4 7 9 10 11 실패


function solution(str1, str2) {
    var arr1 = clearStr(str1);
    var arr2 = clearStr(str2);

    var 교집합 = difference(arr1, arr2);
    var 합집합 = arr1.concat(arr2).concat(교집합);
    
    if(arr1.length === 0 && arr2.length === 0) {
        return 1 * 65536;
    } else {
        return Math.floor((교집합.length / 합집합.length) * 65536);
    }
}

function clearStr(str) { //str정리
    var newArr = str.split('').map(v=> v.toLowerCase());
    
    newArr = newArr.map((v,i) => v + newArr[i+1]);

    for(let i = 0; i < newArr.length; i++) {
        var expression = /^[a-z]*$/;
        if(!expression.test(newArr[i]) || newArr[i].includes('undefined')) {
            newArr.splice(i, 1);
            i--;
        }
    }
    
    return newArr;
}

function difference(arr1, arr2) { //교집합, 합집합 구별
    var dfrc = [];
    for(let i = 0; i < arr1.length; i++) {
        let check1 = arr1.filter(v => v === arr1[i]);
        let check2 = arr2.filter(v => v === arr1[i]);     

        if(check2.length > 0) {
            if(check1.length >= check2.length) {
                dfrc.push(check2);
                for(let j = 0; j < check2.length; j++) {
                    arr1.splice(arr1.indexOf(check2[j]) , 1);
                    arr2.splice(arr2.indexOf(check2[j]) , 1);
                    i--;
                }
            } else {
                dfrc.push(check1);
                for(let j = 0; j < check1.length; j++) {
                    arr1.splice(arr1.indexOf(check1[j]) , 1);
                    arr2.splice(arr2.indexOf(check1[j]) , 1);
                    i--;
                }
            }
        }
    }
    
    return dfrc.flat();
}

//성공