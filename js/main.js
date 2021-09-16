$(document).ready(function(){ 
  var btn = $("nav li a");

  btn.click(function(){
      var btn_num = $(this).parent('li').index(); 
      //클릭한 a가 몇번째 li 안에 있는 건지 알아온다

      btn.removeClass('on');  
      $(this).addClass('on'); 
  });

  $(".thumb").isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      stagger: 30
    });

    var btn1 = $("nav li:nth-child(1)");
    var btn2 = $("nav li:nth-child(2)");
    var btn3 = $("nav li:nth-child(3)");
    var btn4 = $("nav li:nth-child(4)");
    var btn5 = $("nav li:nth-child(5)");
    var btn6 = $("nav li:nth-child(6)");

    btn1.click(function(){
      $(".thumb").isotope({ filter: '.all' });
    });
    btn2.click(function(){
      $(".thumb").isotope({ filter: '.hd' });
    });
    btn3.click(function(){
      $(".thumb").isotope({ filter: '.ps' });
    });
    btn4.click(function(){
      $(".thumb").isotope({ filter: '.pd' });
    });
    btn5.click(function(){
      $(".thumb").isotope({ filter: '.cad' });
    });
    



    //팝업
    var thumbBtn = $(".thumb > li"); //각 썸네일 이미지 버튼을 변수로

 
    thumbBtn.click(function(){
      console.log("클릭했어요!!");
      $('#modal').fadeIn(500);
      console.log("클릭했어요!!");
      var nn =$(this).index();  //클릭한 썸네일(li)이 몇번째 인지 알아와 변수에 넣는다
      console.log(nn);
      $('.big').hide();         //모든 .big을 안보이게 
      $('.big').eq(nn).show();  //클릭한 썸네일과 같은 순서인 .big만 보이게 한다
    });

   

    $('.btn_close').click(function(){
      $('#modal').hide();
    });


});