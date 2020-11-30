var 후보군 = Array(45)
            .fill()
            .map(function (요소, 인덱스) {
                return 인덱스 + 1;
});
// console.log(후보군);

var 셔플 = [];
while (후보군.length > 0 ) {
 var 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0];
  셔플.push(이동값);
}
console.log(셔플);
var 보너스 = 셔플[셔플.length -1];
var 당첨숫자들 = 셔플
                .slice(0,6)
                .sort(function (p,c) {
                    return p-c;
                });
console.log('당첨숫자들 ',당첨숫자들, '보너스', 보너스);

// var 결과창 = document.getElementById('결과창');
var 결과창 = document.querySelector('#결과창');

function 공색칠하기(숫자,결과창) {
    var 공 = document.createElement('div');
    공.textContent = 숫자;
    공.style.display = 'inline-block';
    공.style.border = '1px solid black';
    공.style.borderRadius = '10px';
    공.style.width = '20px';
    공.style.height = '20px';
    공.style.textAlign = 'center'; 
    공.style.marginRight = '10pxr'; 
    공.style.fontSize = '12pxr'; 
    공.className = '공아이디' + 숫자; 


    var 배경색;
    if (숫자 <= 10 ) {
        배경색 = 'red';
    } else if (숫자 <= 20) {
        배경색 = 'orange';
    } else if (숫자 <= 30) {
        배경색 = 'yellow';
    } else if (숫자 <= 40) {
        배경색 = 'blue';
    } else  {
        배경색 = 'green';
    } 
    공.style.background = 배경색; 
    결과창.appendChild(공);
}

setTimeout(function 비동기콜백함수() {
   공색칠하기(당첨숫자들[0], 결과창);
}, 1100); //밀리초

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[1], 결과창);
}, 1200); //밀리초

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[2], 결과창);
}, 1300); //밀리초

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[3], 결과창);
}, 1400); //밀리초

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[4], 결과창);
}, 1500); //밀리초

setTimeout(function 비동기콜백함수() {
    공색칠하기(당첨숫자들[5], 결과창);
}, 1600); //밀리초
    
setTimeout(function 비동기콜백함수() {
    // var 보너스칸 = document.getElementsByClassName('보너스')[0];
    var 보너스칸 = document.querySelector('.보너스');
    공색칠하기(보너스, 보너스칸);
}, 1700); //밀리초
