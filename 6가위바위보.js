  var 이미지좌표 = '0' ;
  var 가위바위보 = {
    바위 : '0',
    가위 : '-101px',
    보 :   '-202px'
};

function 컴퓨터의선택(이미지좌표) {   
    return Object.entries(가위바위보).find(function(v) {    //find는 반복문
        return v[1] === 이미지좌표;
    })[0];
}
 
var 인터벌;
function 인터벌메이커() {
  인터벌 = setInterval(function() {
      if (이미지좌표 === 가위바위보.바위) {
          이미지좌표 = 가위바위보.가위;
      } else if ( 이미지좌표 === 가위바위보.가위) {
          이미지좌표 = 가위바위보.보; 
      } else {
          이미지좌표 = 가위바위보.바위 ;
      }
      document.querySelector('#computer').style.background =
      'url(http://localhost/img/가위바위보.png)' + 이미지좌표 + ' 0';
      }, 100);
    }

    인터벌메이커();

    var 점수표 = {
        가위 : 1,
        바위: 0,
        보 : -1,
    };

      document.querySelectorAll('.btn').forEach(function(btn) {
          btn.addEventListener('click', function() {
            clearInterval(인터벌); 
            setTimeout(function() {
                인터벌메이커();
            },1000);

              var 나의선택 = this.textContent;
              var 나의점수 = 점수표[나의선택];
              var 컴퓨터점수 = 점수표[컴퓨터의선택(이미지좌표)];
              var 점수차 = 나의점수 - 컴퓨터점수;
              if (점수차 === 0) {
                  console.log('비겼습니다.');
              } else if ([-1, 2].includes(점수차)) {
                  console.log('이겼습니다 !!');
              } else {
                  console.log('졌습니다 ...');
            }
          });
      });

      // 가위: 1, 바위:0, 보:-1
      // 나 \ 컴퓨터     가위   바위   보
      //  가위           1 1   1 0   1 -1
      //  바위           0 1   0 0   0 -1
      //    보          -1 1  -1 0  -1 -1

      var 시작값 = 3;
      var 인터벌2 = setInterval(function(){
          if (시작값 === 0) {
              console.log('종료 !!!');
              return clearInterval(인터벌2);
          }
          console.log(시작값);
          시작값 -= 1;
      }, 1000);