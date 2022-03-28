$(document).ready(function(){
  var indexP=0
  var moveTop=0;
  var sectionHeight=0;
  var winWidth=null;
  var winHeight=null;
  var autoNum=0;

  //섹션의 너비와 높이 설정 시작
  function winSize(){
      // 창의 너비가 변경되어 모바일의 크기에 도달했을 때 데스크탑의 동작을 크거나 변경하기 위한 작업
      winWidth=$(window).width();

      console.log("창의 너비 :  "+winWidth);
      winHeight=$(window).height();
      $(".section").css({
          height:winHeight
      });
  }; 
  //셕션의 너비와 높이 설정 /끝
  winSize();

  //섹션의 너비와 높이 재 설정 시작
  $(window).resize(function(){
      winSize();
      scrollEvent();
  });
  //섹션의 너비와 높이 재 설정 /끝

  //페이지네이션 링크 시작
  // $(".pn a").eq(0).addClass("v-active");
  //태그에서 v-active를 첫번쩨 요소에 작성했다면 필요없음

  function page(indexP){
    //비활성
    $(".pagenation a").removeClass("v-active");
    $(".pagenation a").eq(indexP).addClass("v-active");
  }

  $(".pagenation a").each(function(indexP){
   console.log("a의수 : "+indexP)
    $(this).click(function(){
      var $hash=$(this,"hash").offset(),top;
      $("pagenation a").removeClass("v-active");
      $(this).addClass("v-active");
      $("html,body").stop().animate({
        scrollTop:$hash
      });
      autoNum=indexP +1;
    });
  });
  // 페이제네이션 링크 /끝
  
  // 휠 이벤트 시작
  function wheel(){

      winSize();
      // 섹션의 수 불러오기
      $(".section").each(function(index){
          // 섹션 휠이벤트 적용 시작
        $(this).on('DOMMouseScroll mousewheel', function(e){
            // 휠을 내렸거나 올렸을 때 조건
          if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
              // 휠을 올렸을 때
              console.log("올렸어요");
              // 휠이 동작되면 이전 요소가 있는지 확인
              if($(this).prev()!=undefined){
                  // 이전 요소가 있을 때 이전요소의 탑의 위치를 찾음
                  moveTop=$(this).prev().offset().top;
                  // 이전 요소의 순서 기억
                  indexP=index-1; // 현재 요소에 1을 뺀 후 이전 요소 순서(indexP)기억
                  page(indexP) // 페이지네이션의 a 활성화
                  
              }
          }else{
              //휠을 내렸을 때
              console.log("내렸어요")
              // 휠이 동작되면 다음 요소가 있는지 확인
              if($(this).next()!=undefined){
                  // 다음 요소가 있을 때 다음요소의 탑의 위치를 찾음
                  moveTop=$(this).next().offset().top;
                  // 다음 요소의 순서 기억 
                  indexP=index+1; // 현재 요소에 1을 더해 다음 요소 순서(indexP)기억
                  page(indexP) // 페이지네이션의 a 활성화
                  
              }
          }
          // 섹션 휠이벤트 적용 /끝
          
          autoNum=indexP;

          // 휠을 내렸을 때와 올렸을 때의 애니메이션 시작
          $("html,body").stop().animate({
              scrollTop:moveTop
          },1000);
          // 휠을 내렸을 때와 올렸을 때의 애니메이션 /끝
          console.log("indexP : "+indexP)

          //휠 이벤트 후 사이즈 재설성 시작
          $(window).resize(function(){
              var winHeight=$(window).height();
              $(".section").css({
                  height:winHeight
              });
              $("html,body").stop().animate({
                  scrollTop:winHeight*indexP 
              },0);

          });
          //휠 이벤트 후 사이즈 재설성 /끝

        });
          // 섹션 휠이벤트 적용 /끝

        
      });
      // 섹션의 수 불러오기 /끝
      
  }
  // 휠 이벤트 /끝
  
  wheel();
  
  function autoPlayv(){
    autoV=setInterval(function(){
             
      if(autoNum<5){
        
        $("html,body").stop().animate({
          scrollTop:$(".section").eq(autoNum).offset().top
        },700);
        page(autoNum);
        // console.log("autoNum"+autoNum);
        autoNum++;
      }else{
        autoNum=0;
      }

    },10000);
  }
  autoPlayv();
  
  // $(window).resize(function(){
  //     wheel();
  // });


});