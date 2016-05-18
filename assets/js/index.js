$(function(){
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^=#top]').click(function() {
    $('body,html').animate({scrollTop:0}, 400, 'swing');
    return false;
  });

  $(".menu-trigger").click(function () {
    //初期値はactiveクラスが無い
    //＝メニューが非表示の場合はactiveクラスが無い

    // true or false 確認するのに使用
    // console.log($(this).hasClass("active"))

    //トグルスイッチ
    //オンオフを繰り返す。クラスをつける、消すを繰り返す。
    if($(this).hasClass("active") == true){
      $(".layerMenu").slideUp("hide");
    }else{
      $(".layerMenu").slideDown("show"); 
      }
      $(this).toggleClass("active");
    });

  $('.bnr_slider').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
    pauseOnHover:true
  });
});