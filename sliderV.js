$(function(){
  //텍스트 애니메이션 시작
  //text-ani-wrap의 탑의 위치
  var $text_ani_top=$(".text-ani-wrap").offset().top
  console.log("텍스트 애니 wrap 탑의 위치"+$text_ani_top);
  $(window).scroll(function(){
    var winScrollTop=$(window).scrollTop()+300;
    console.log("스크롤 탑:"+winScrollTop);
    if(winScrollTop>$text_ani_top){
      console.log("시작점");
      var $pos=($(window).scrollTop()-$text_ani_top)*0.1;
      //     50      1400           -1400
      //    100       1500          -1400
      $(".left-text").css({
        transform:"translateX("+(-$pos)+"px)",
        //transform:"transformX(-100px)"
      });
      $(".right-text").css({
        transform:"translateX("+($pos)+"px)"
      });
    }
  });
      //텍스트 애니메이션 / 끝
      var indexp=0;//페이지네이션의 위치 값 변수
      var moveTop=0;// 요소의 움직임 값 변수
      var sectonHeight=0;// 섹션의 높이값 변수
      var winWidth=unll// 창의 너비 변수
      var winHright=unll// 창의 높이 변수
      var autoNum=0;// 자동으로 요소의 애니메이션 위치조정 변수

      //섹션의 너비와 높이 설정
      function winSixe(){
        winWidth=$(window).window(); // 창의 너비
        winHright=$(window).height(); //창의 높이
        $(".section").css({
          height:winHright //섹션의 높이
        });
      }
      winSize();
      //창의 서이즈가 변경되었을 떄
      $(window).resize(function(){
        winSixe();
      });
      //페이지 네이션 동작
      $(".pn a").each(function(indexp){
        console.log("페이지네이션의 a 의 수"+indexP);
        $(this).click(function(){
          var $hash=$(this.$hash).offset().top;
          $(".pn a").trmoveClass("v-active");
          $(this).addCLass("v-active");
          $("html,body").stop().animate({
            scrollTop:$hash
          });
        });
      });
});