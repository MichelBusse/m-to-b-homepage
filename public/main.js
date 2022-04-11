

  $(document).on("scroll", scrolling);
  $(window).resize(resize);
  scrolling();
  resize();


  setTimeout(function(){
  subHeadlineTransform($("#subHeadline"));
  }, 5000);

  setTimeout(
  function()
  {
    $("header button").addClass("active").removeClass("active");
  }, 1000);

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



  $(document).ready(function (){
    $('a[href*=\\#]').stop().click(function(evt){
      if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname){
        var UD_ZIEL = $(this.hash);
        if(UD_ZIEL.length){

          var UD_ABSTAND_TOP = UD_ZIEL.offset().top;

          evt.preventDefault();
          $('html,body').animate({scrollTop: UD_ABSTAND_TOP}, 1000,function(){});
          if($(".hamburgerMenu").hasClass("active")){
            toggleMenu();
          }
        }
      }
    });
    $(".contactFormular input").each((index) => {
      if($(this).val() !== ""){
        $(event.currentTarget).addClass("written");
      }
    });

    $("input").change(function(event){
      if($(event.currentTarget).val() !== ""){
        $(event.currentTarget).addClass("written");
      }else{
        $(event.target).removeClass("written");
      }
    });
    $("textarea").change(function(event){
      if($(event.currentTarget).val() != ""){
        $(event.currentTarget).addClass("written");
      }else{
        $(event.target).removeClass("written");
      }

    });


    if($(".topMessage").html() != ""){
      setTimeout(function(){
        $(".topMessage").fadeOut();
      }, 5000);
    }

  });


  function resize(){
    if($(window).width() < 1184){
      if($(window).height() < $(window).width() * 0.66){
        $(".foreground").css("background-size",  "100% auto");
      }else{
        $(".foreground").css("background-size",  "auto 100%");
      }
    }
    if($(window).width() > 1063){
      if($(".mobileMenu").hasClass("active")){
        toggleMenu();
      }
    }
    scrolling();
  }

  function scrolling(){
    var top = $(document).scrollTop();

    if(top == 0 && !$(".mobileMenu").hasClass("active")){
      $("nav").removeClass("scrolled");
    }else{
      $("nav").addClass("scrolled");
    }

    if($(window).width() > 1183){
        if($("#homeFixed").css("display") != "none"){
          if($(window).height() < $(window).width() * 0.66){
            $(".foreground").css("background-size",  "" + (100 + 100 * (top  / 3000)) + "% auto");
          }else{
            $(".foreground").css("background-size",  "auto " + (100 + 100 * (top  / 3000)) + "%");
          }
        }
    }


    if((top > $("#services").offset().top - $(window).height() * 1.5) && ((top) < ($("#services").offset().top + $("#services").height() + $(window).height() * 0.5))){

      $( ".service" ).each(function(index) {
        if(!$( this ).hasClass("visible")){
          if(($( this ).offset().top) < (top + ($(window).height() * 0.65) )){
            $( this ).addClass( "visible");
          }
        }

      });
    }

    if((top > ($("#transition").offset().top - $(window).height() * 0.5)) && (!$(".project").eq(1).hasClass("visible"))){
      $(".project").each(function(i){
        setTimeout(function(){
          $(".project").eq(i).addClass("visible");
        }, 400 * (i));
      });
    }


    //MenuActive

    if(top > $("#contact").offset().top - 200){
      $(".ulWrapper li").removeClass("active");
      $("#li4").addClass("active");
      $(".mobileMenu li").removeClass("active");
      $("#mobile4").addClass("active");
    }else if(top > $("#transition").offset().top - 200){
      $(".ulWrapper li").removeClass("active");
      $("#li3").addClass("active");
      $(".mobileMenu li").removeClass("active");
      $("#mobile3").addClass("active");
    }else if(top > $("#services").offset().top - 200){
      $(".ulWrapper li").removeClass("active");
      $("#li2").addClass("active");
      $(".mobileMenu li").removeClass("active");
      $("#mobile2").addClass("active");
    }else if(top > $("#about").offset().top - 200){
      $(".ulWrapper li").removeClass("active");
      $("#li1").addClass("active");
      $(".mobileMenu li").removeClass("active");
      $("#mobile1").addClass("active");
    }else{
      $(".ulWrapper li").removeClass("active");
      $(".mobileMenu li").removeClass("active");
    }
  }


  function toggleMenu(){
    if($(".mobileMenu").hasClass("active")){
      if($("nav").hasClass("scrolled") && $(document).scrollTop() == 0){
        $("nav").removeClass("scrolled");
      }
      $(".mobileMenu").removeClass("active");
      $(".hamburgerMenu").removeClass("active");
      $("body").css("overflow-y","auto");
      $(".mobileMenu li").removeClass("animated");
    }else{
      if(!$("nav").hasClass("scrolled")){
        $("nav").addClass("scrolled");
      }
      $(".mobileMenu").addClass("active");
      $(".hamburgerMenu").addClass("active");
      $("body").css("overflow-y","hidden");

      $(".mobileMenu li").each(function(i){
        setTimeout(function(){
          $(".mobileMenu li").eq(i).addClass("animated");
        }, 50 * (i));
      });
    }
  }


  function typeWriter(element, txt) {
    var speed = 300;

    element.html(element.html() + txt.charAt(0));
    for(let i = 1; i < txt.length; i++){
      setTimeout(function(){
          element.html(element.html() + txt.charAt(i));
      }, i * speed);
    }
  }

  function subHeadlineTransform(element) {
    var speed = 100;

    setTimeout(function(){
        var finished = true;
        if(element.html().charAt(0) !== "Z"){
          finished = false;
          element.html(element.html().replaceAt(0, String.fromCharCode(element.html().charCodeAt(0) + 1)));
        }
        if(element.html().charAt(1) !== "u"){
          finished = false;
          element.html(element.html().replaceAt(1, String.fromCharCode(element.html().charCodeAt(1) + 1)));
        }
        if(element.html().charAt(2) !== "k"){
          finished = false;
          element.html(element.html().replaceAt(2, String.fromCharCode(element.html().charCodeAt(2) + 1)));
        }
        if(element.html().charAt(3) !== "u"){
          finished = false;
          element.html(element.html().replaceAt(3, String.fromCharCode(element.html().charCodeAt(3) + 1)));
        }
        if(element.html().charAt(4) !== "n"){
          finished = false;
          element.html(element.html().replaceAt(4, String.fromCharCode(element.html().charCodeAt(4) - 1)));
        }
        if(element.html().charAt(5) !== "f"){
          finished = false;
          element.html(element.html().replaceAt(5, String.fromCharCode(element.html().charCodeAt(5) + 1)));
        }
        if(element.html().charAt(6) !== "t"){
          finished = false;
          element.html(element.html().replaceAt(6, String.fromCharCode(element.html().charCodeAt(6) + 1)));
        }else{
          element.html(element.html().replaceAt(7, " "));
        }
        if(element.html().charAt(7) !== " "){
          finished = false;
          element.html(element.html().replaceAt(7, String.fromCharCode(element.html().charCodeAt(7) - 1)));
        }
        if(!finished){
          subHeadlineTransform(element);
        }else{
          setTimeout(function(){
            subHeadlineTransformReverse(element);
          },3000);
        }
    }, speed);
  }

  function subHeadlineTransformReverse(element) {
    var speed = 100;

    setTimeout(function(){
        var finished = true;
        if(element.html().charAt(0) !== "S"){
          finished = false;
          element.html(element.html().replaceAt(0, String.fromCharCode(element.html().charCodeAt(0) - 1)));
        }
        if(element.html().charAt(1) !== "o"){
          finished = false;
          element.html(element.html().replaceAt(1, String.fromCharCode(element.html().charCodeAt(1) - 1)));
        }
        if(element.html().charAt(2) !== "f"){
          finished = false;
          element.html(element.html().replaceAt(2, String.fromCharCode(element.html().charCodeAt(2) - 1)));
        }
        if(element.html().charAt(3) !== "t"){
          finished = false;
          element.html(element.html().replaceAt(3, String.fromCharCode(element.html().charCodeAt(3) - 1)));
        }
        if(element.html().charAt(4) !== "w"){
          finished = false;
          element.html(element.html().replaceAt(4, String.fromCharCode(element.html().charCodeAt(4) + 1)));
        }
        if(element.html().charAt(5) !== "a"){
          finished = false;
          element.html(element.html().replaceAt(5, String.fromCharCode(element.html().charCodeAt(5) - 1)));
        }
        if(element.html().charAt(6) !== "r"){
          finished = false;
          element.html(element.html().replaceAt(6, String.fromCharCode(element.html().charCodeAt(6) - 1)));
        }else{
          element.html(element.html().replaceAt(6, "re"));
        }
        if(!finished){
          subHeadlineTransformReverse(element);
        }else{
          setTimeout(function(){
            subHeadlineTransform(element);
          },5000);
        }
    }, speed);
  }

  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  };
