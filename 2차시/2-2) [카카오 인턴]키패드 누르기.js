function solution(numbers, hand) {
    var answer = [];
    var key = [[1,4,7,'*'], 
               [2,5,8,0], 
               [3,6,9,'#']]
    var nowL = '*';
    var nowR = '#';
    
    for(var i=0; i < numbers.length; i++) {
        if(key[0].includes(numbers[i])) {
            answer[i] = "L";
            nowL = numbers[i];
        } else if(key[2].includes(numbers[i])) {
            answer[i] = "R";
            nowR = numbers[i];
        } 
        
        if(key[1].includes(numbers[i])) {
                var distL = 0;
                var distR = 0;
                if(nowL == '*') {
                    if(numbers[i] == 2) {
                        distL = 4;
                    } else if(numbers[i] == 5) {
                        distL = 3;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 1;
                    }
                } else if(nowL == 7) {
                    if(numbers[i] == 2) {
                        distL = 3;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 2;
                    }
                } else if(nowL == 4) {
                    if(numbers[i] == 2) {
                        distL = 2;
                    } else if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 3;
                    }
                } else if(nowL == 1) {
                    if(numbers[i] == 2) {
                        distL = 1;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 3;
                    } else if(numbers[i] == 0) {
                        distL = 4;
                    }
                } else if(nowL == 2) {
                    if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 2;
                    } else if(numbers[i] == 0) {
                        distL = 3;
                    }
                } else if(nowL == 5) {
                    if(numbers[i] == 2) {
                        distL = 1;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 2;
                    }
                } else if(nowL == 8) {
                    if(numbers[i] == 2) {
                        distL = 2;
                    } else if(numbers[i] == 5) {
                        distL = 1;
                    } else if(numbers[i] == 0) {
                        distL = 1;
                    }
                } else if(nowL == 0) {
                    if(numbers[i] == 2) {
                        distL = 3;
                    } else if(numbers[i] == 5) {
                        distL = 2;
                    } else if(numbers[i] == 8) {
                        distL = 1;
                    }
                }
                
                if(nowR == '#') {
                    if(numbers[i] == 2) {
                        distR = 4;
                    } else if(numbers[i] == 5) {
                        distR = 3;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 1;
                    }
                } else if(nowR == 9) {
                    if(numbers[i] == 2) {
                        distR = 3;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 2;
                    }
                } else if(nowR == 6) {
                    if(numbers[i] == 2) {
                        distR = 2;
                    } else if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 3;
                    }
                } else if(nowR == 3) {
                    if(numbers[i] == 2) {
                        distR = 1;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 3;
                    } else if(numbers[i] == 0) {
                        distR = 4;
                    }
                } else if(nowR == 2) {
                    if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 2;
                    } else if(numbers[i] == 0) {
                        distR = 3;
                    }
                } else if(nowR == 5) {
                    if(numbers[i] == 2) {
                        distR = 1;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 2;
                    }
                } else if(nowR == 8) {
                    if(numbers[i] == 2) {
                        distR = 2;
                    } else if(numbers[i] == 5) {
                        distR = 1;
                    } else if(numbers[i] == 0) {
                        distR = 1;
                    }
                } else if(nowR == 0) {
                    if(numbers[i] == 2) {
                        distR = 3;
                    } else if(numbers[i] == 5) {
                        distR = 2;
                    } else if(numbers[i] == 8) {
                        distR = 1;
                    }
                }
            
            if(distL == distR) {
                if(hand == "left") {
                    answer[i] = "L";
                    nowL = numbers[i];
                } else if(hand == "right") {
                    answer[i] = "R";
                    nowR = numbers[i];
                }
            } else {
                if(distL > distR) {
                    answer[i] = "R";
                    nowR = numbers[i];
                } else if(distR > distL) {
                    answer[i] = "L";
                    nowL = numbers[i];
                }
            }
        }
    }
    
    return answer.join('');
}

//와 이걸푸네;; 하지만 너무 하드코딩했다 ㅠㅠ