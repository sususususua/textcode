$(function(){
  var $width=0;
  var $length=("slide").length;
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
     //왼쪽으로 움직이도록 하는 함수
     $(".slides").stop().animate({
       left:-slide_width
     },function(){
       $(this).append("<div class='slide'>"+$(this).find(".slide:first").html()+"</div>")
       //slides에 추가<div class='slide'>+첫번째 html의 내용을 포함 + </div>
       $(this).find(".slide:first").remove();
       //append추가 후에 기존 첫번째 요소는 remove()를 이용해서 요소 삭제
       $(this).find(".slide").css({width:slide_width});
       //슬라이드의 너비를 다시 설정
       $(this).css({left:0})
       //slides의 위치를 왼쪽0의 위치로 재 조정
     })
   }
   $(".prev").click(function(){
     prevMove();
   });

   function prevMove(){ // 뒤에 배치된 요소를 앞으로 끌어와서 왼쪽으로 조정
     $(".slidea").css({
       left:-slide_width
     })
     $(".slides").prepend("<div class='slide'"+$(".slides").find(".slide:last").html()+"</div>");
     //slides의 요소에 뒤에 있는 요소를 앞으로 추가하는 경우
     $(".slides").find(".slide:last").remove();
     //slides에 마지막 요소를 삭제
     $(".slides").find(".slide:first").css({width:slide_width});
     //slide의 너비를 재 설정
     $(".slides").stop().snimate({
       left:0
     })
     //slides의 위치가 밖에 있는 위치의  값(-slide_width)을 left:0의 위치로 에니메이션 한다.
   }
   $(window).resize(function(){
    ini();
   })
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