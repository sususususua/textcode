$(function(){
  //텍스트 애니메이션 시작
    // text-ani-wrap의 탑의 위치
    var $text_ani_top=$(".text-ani-wrap").offset().top;
    console.log("텍스트 애니 wrar 탑의 위치 : "+$text_ani_top);
    $(window).scroll(function(){
      // var winScrollTop=$(window).scrollTop()+300;
      var winScrollTop=$(window).scrollTop()+$(window).height()
      console.log("스크롤 탑 : "+winScrollTop);
      if(winScrollTop > $text_ani_top){
        console.log("시작점");
        var $pos=( $(window).scrollTop()-$text_ani_top )*0.1;
       //     50     1450              -  1400
       //   100       1500              - 1400
        $(".left-text").css({
          transform:"translateX("+(-$pos)+"px)",
          // transform:"translateX(-100px)"
        })
        $(".right-text").css({
          transform:"translateX("+($pos)+"px)"
        })
      }
    });
  //텍스트 애니메이션 /끝

  var indexP=0; //페이지네이션의 위치 값 변수
  var moveTop=0; // 요소의 움직임 값 변수
  var sectionHeight=0; // 섹션의 높이값 변수
  var winWidth=null; // 창의 너비 변수
  var winHeight=null; //창의 높이 변수
  var autoNum=0;  // 자동으로 요소의 애니메이션 위치조정 변수

  //섹션의 너비와 높이 설정
  function winSize(){
    winWidth=$(window).width(); //창의 너비
    winHeight=$(window).height(); // 창의 높이
    $(".section").css({
      height:winHeight  // 섹션의 높이
    });
  }
  winSize();
  // 창의 사이즈가 변경되었을 때
  $(window).resize(function(){
    winSize();
  });
  

  //페이지네이션 동작
  $(".pn a").each(function(indexP){
    console.log("페이지네이션의 a의 수"+indexP);
    $(this).click(function(){
      var $hash=$(this.hash).offset().top;
      $(".pn a").removeClass("v-active");
      $(this).addClass("v-active");
      $("html,body").stop().animate({
        scrollTop:$hash
      });
      return false;
    });
  });
  // 페이지네이션 동작 /끝
  
  //스크롤 이벤트
  function scrollEvent(){

    $(window).scroll(function(){
      var winScrollTop=$(this).scrollTop();
      $(".pn a").each(function(indexP){
        if(winScrollTop > $(this.hash).offset().top){
          page(indexP);
        }
      });
      console.log("스크롤")
    });
  }
  function page(indexP){
    $(".pn a").removeClass("v-active");
    $(".pn a .tip").removeClass("t-active")
    $(".pn a").eq(indexP).addClass("v-active");
    $(".pn a").eq(indexP).find(".tip").addClass("t-active")
  }
  scrollEvent();
    
  function autoPlay(){
      autoV=setInterval(function(){
        if(autoNum<5){
          $("html,body").stop().animate({
            scrollTop:$(".section").eq(autoNum).offset().top
          },700);
          page(autoNum);
          //console.log("autoNum"+autoNum);
          autoNum++;
        }else{
          autoNum=0;
        }
      },1000);
    }
    //자동 play 설정 /끝
    autoPlay();
});