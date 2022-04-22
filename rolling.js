$(function(){
  var $width=0;
  var $length=(".slide").length;
  var $dot_lendth=$(".dot").length;
  var $value=1; //한 회면에 ㅎ의 슬라이드만 표시
   // for(현재 dot의 수부터 ; 변화된 슬라이드의 수까지 ; 1씩 증가해서){

   //}
   for(i=$dot_lendth ; i<$length ; i++){
     $(".pade-dots").append("<span class='dot'></span>")
   }
   function ini(){
     //초기값 설정 함수
     $width=$(".slider-container").width();//슬라이드 구역의 너비값을 받아온다.
     $(".slider-wrap").css({
       width:$width
     })
     slide_width=parseInt($width/$value);//화면에 표시할 슬라이드의 수 계산
     $(".slide").css({
       width:slide_width
     })
     $("slides").css({
       width:slide_width*$length
       //슬라이드를 감싸고 있는 슬라이즈는 슬라이드의 개수와 너비만큼 커야 하기 때문에 슬라이드의 너비 *슬라이드의 수
     })
   }
   ini();
   $(".next").click(function(){
     //넥스트 버튼을 클릭하면 slides가 왼쪽으로 옯격도록
     nextMove(); //왼쪽으로 움직이는 동작을 함수로 만들어서 적용
   })
   function nextMove(){

     $(".slides").stop().animate({
       left:-slide_width
     },function(){
      for (i=0; i<ppos; i++){ 
        $(this).append("<div class='slide'>"+$(this).find(".slide:first").html()+"</div>")
        $(this).find(".slide:first").remove();
        $(this).find(".slide").css({width:slide_width});
        $(this).css({left:0})
      }
     
     })
   }
   $(".prev").click(function(){
     prevMove();
   });

   function prevMove() {
        
    $(".slides").css({left:-slide_width*ppos});
    // for(i=0; i<ppos; i++){
        //페이지네이션의 dot에서 이전 위치와 현 위치의 이동 위치만큼 prevMove함수에서 이동
        $(".slides").prepend("<div class='slide'>"+$(".slides").find(".slide:last").html()+"</div>");
        $(".slides").find(".slide:last").remove();
        $(".slides").find(".slide:first").css({width:slide_width});
        $(".slides").animate({left:0});
    // }
    
  } 
   $(window).resize(function(){
    ini();
   });

   function autoPlay(){
        
        
    auto=setInterval(function(){
        nextMove();
    },5000);
};

autoPlay();
$(".slide").mouseenter(function(){
    clearInterval(auto);
});
$(".slide").mouseleave(function(){
    autoPlay();
});

// var last=0; 
// var slideIndex=1;
// var ppos=0;
// function pagenation(){
//   $(".dot").each(function(index){
//     $(this).click(function(e){

//       $(".dot").removeClass("active");
//       $(this).addClass("active");
//       slideIndex=index; 
//       if(last==slideIndex){ 
//       }else{
//         ppos=slideIndex-last;

//         if(last==slideIndex){
//           ppos=0;
//         }else{
//           ppos=slideIndex-last;
//         }
//         if(ppos<0){ 
//           ppos=ppos*-1;
//           prevMove();
//       }else{
//         nextMove();
//       }

//     };
//    });
  
//   });
// }
// pagenation();
//   var value=0;
// $(".slide").each(function(index){
//   value++;
//   console.log("반복"+value);
// })
// // 요소의 수 만큼 for를 이용해서 반복
//   var $length=$("slide").$length; 
//   for(i=0; i<5; i++){
//     console.log("i의 값"+i);
//   }

});