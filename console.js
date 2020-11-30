// var word = '조충호';
// while (true){
//     if (word[word.length - 1] === answer[0]) {
//          alert('딩동댕');
//          word = answer;
//     }else {
//         alert('땡!');
//           
//     }
// }


// for (var  word = '조충호'; true; ) {
//     var answer  = prompt(word);
//     if  (word[word.length - 1] === answer[0]) {
//         alert('딩동댕');
//         word = answer;
//     } else {
//          alert('땡!');
//     }     
// }

// for (var star = 1; star <= 5; star += 1 ) {
//     console.log('*'.repeat(star));
// }

// for (var star = 0; star = 5; star += 1 ) {
//     console.log('*'.repeat(star + 1 ));
// }

// for (var star = 5; star >= 1; star -= 1 ) {
//     console.log('*'.repeat(star));
// }

// for (var star = 9;  star >= 1; star -= 2 ) {
//     console.log(' '.repeat((9-star)/2) + '*'.repeat(star));
// }

// 1부터 9까지 무작위 숫자 추출
// for ( var i = 1; i <= 19; i += 1 ){
//     console.log( Math.floor(Math.random()  * 9 ) +1 )  // 1 ~9
// };


// Looping
while (true) {
    var 숫자1 = Math.floor(Math.random() * 9) + 1 ;
    var 숫자2 = Math.floor(Math.random() * 9) + 1 ;
    var 결과 = 숫자1 * 숫자2 ;
    var 조건 = true ;
    while (조건) {
        var 답 = prompt(String(숫자1) + '곱하기' + 
                        String(숫자2) + '는?' );
        if (결과 === Number(답)) {
            alert ('딩동댕');
            조건 = false;
        
        } else {
            alert('땡');
        }
    }
} 