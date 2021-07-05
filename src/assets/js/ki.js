var action = [];
var cur_index = 1;
var max_index = 4;
var load_finished = false; // 처음에 loading finish 여부
var qIndex = 0;
var minorStep = 0;
var timer_index = 0;
var first = false;
var second = false;
var page = 1;
var flash_index = 0;
var chk_1 = false;
var chk_2 = false;
var chk_3 = false;
var location_info = {
  "test": "test"
};

//마지막 문제 맞췄을 때 풍선 대신
function cha_start() {
  var cha = $("#flowers");

  cha.append("<img class='cha' src='/web/resource/img/flower/fl2/cha.png' style='display: none;position: absolute; top: 150px;left: 50%;transform: translateX(-50%);'>");

  $("#flowers").css("display", "block");
  $('.cha').css('display', 'block');
}

//문제 맞췄을 때 별표 대신
function cha2_start() {
  var cha2 = $('#star');

  cha2.addClass('star2').append("<img class='cha2' src='/web/resource/img/flower/fl2/cha2.png' style='position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);'>");

  $(".star2").css("display", "block");
  $('.cha2').css('display', 'block');

  setTimeout(function () {
    $(".star2").css("display", "none");
    $('.cha2').css('display', 'none');
    cha_start();
  }, 2000);
};


// function startShowStar(){
//   $(".star").css("opacity", 0);
//   $("#star").css("display", "block");

//   var i = 1;
//   var ani = setInterval(function(){
//     $(".star").css("opacity", 0);
//     var t = $("#" + "starEffect_" + i);
//     if (t.length){
//       t.css("opacity", 1);
//     }
//     else{
//       clearInterval(ani);
//       ani = null;
//       $(".star").css("opacity", 0);
//       $("#star").css("display", "none");
//     }
//     i++;
//   }, 50);
// }


// function loadStarAnimation(){
//   function pad(n, width) {
//     n = n + '';
//     return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
//   }
//   var div = $("#star");
//   for (var i = 1; i < 32; i++ ){
//     var img = $("<img class='star' style='opacity:0; position:absolute; left:0px; top:0px'>");
//     img.attr("src", "../star/" + i + ".png");
//     img.attr("id", "starEffect_" + i);
//     img.appendTo(div);
//   }
// }

function goNext() {

  var aN = $("#anext");

  aN.on("ended", function () {
    window.location = right_url;
  });
  aN[0].play();

}

function goPrev() {

  var aN = $("#anext");

  aN.on("ended", function () {
    window.location = left_url;
  });
  aN[0].play();
}

function goPage(pageUrl) {

  var aN = $("#anext");

  aN.on("ended", function () {
    window.location = pageUrl;
  });
  aN[0].play();
}

/* stop all audio */
function sa() {
  var audios = document.getElementsByTagName("audio");
  for (var i = 0; i < audios.length; i++) {
    var audio = audios[i];
    if (audio.id != "intro") {
      audio.onended = null;
      audio.pause();
      audio.currentTime = 0;
    }
  }
}

/* stop flash */
function sf() {
  flash_index = flash_index + 1;
}

/* play sound */
function pe(audio, start, ended, ex) {
  sa();

  if (play_background == false) {
    play_background = true;
    abackground.volume = 0.5;
    abackground.play().catch(function () {
      play_background = false;
    });
  }

  if (start != null) start();
  audio[0].onended = function () {
    abackground.volume = 0.5;
    if (ended != null) {
      ended();
    }
  }

  abackground.volume = 0.1;
  audio[0].play().catch(function () {
    if (ex != null) ex();
    abackground.volume = 0.5;
  });
}

/* flash element */
function ef(element, ended, count) {
  flash_enable = true;
  var curr_flash_index = flash_index;
  var flash_count = count == null ? 1 : count;
  var flash = function () {
    if (curr_flash_index == flash_index && flash_count > 0) {

      flash_count--;
      element.fadeOut(500).fadeIn(500, flash);
    } else if (curr_flash_index == flash_index && flash_count <= 0) {
      if (ended != null) ended();
    }
  };

  flash();
}

/* fade out, move to save location, fade in */
function ff(element, dura) {
  if (dura = null) dura = 100;

  element.fadeOut(dura, function () {
    element.css("left", sl(element));
    element.css("top", st(element));
    element.fadeIn(dura);
  });
}

/* move to save location*/
function mv(element) {
  element.animate({
    left: sl(element),
    top: st(element)
  });
}

/* save left and top */
function sv(element) {

  if (element.length == 1) {
    var id = element.attr("id");
    var left = element.css("left");
    var top = element.css("top");
    location_info[id + "-left"] = left;
    location_info[id + "-top"] = top;
  } else {

    for (var i = 0; i < element.length; i++) {
      var el = element.eq(i);
      var id = el.attr("id");
      var left = el.css("left");
      var top = el.css("top");
      location_info[id + "-left"] = left;
      location_info[id + "-top"] = top;
    }
  }
}

/* get saved left */
function sl(element) {
  var id = element.attr("id");
  return location_info[id + "-left"];
}

/* get saved top */
function st(element) {
  var id = element.attr("id");
  return location_info[id + "-top"];
}

/* fade out element when display */
function fo(element) {
  if (element.length == 1) {
    if (element.css("display") != "none") {
      element.fadeOut(500);
    }
  } else {
    for (var i = 0; i < element.length; i++) {
      var el = element.eq(i);

      if (el.css("display") != "none") {
        el.fadeOut(500);
      }
    }
  }
}

/* fade in element when not display */
function fi(element) {
  if (element.length == 1) {
    if (element.css("display") == "none") {
      element.fadeIn(500);
    }
  } else {
    for (var i = 0; i < element.length; i++) {
      var el = element.eq(i);

      if (el.css("display") == "none") {
        el.fadeIn(500);
      }
    }
  }
}

/* end function : show left / right button */
function ed() {
  if (left_url != null) {
    $("#prev").css("display", "");
    prev = function () {

      if (click_enable == false) return;

      sa();
      sf();
      var anext = $("#anext");
      anext.on("ended", function () {
        window.location = left_url;
      });

      anext[0].play();
      click_enable = false;
    };
  } else {
    $("#prev").css("display", "none");
  }

  if (right_url != null) {
    $("#next").css("display", "");
    next = function () {

      if (click_enable == false) return;

      sa();
      sf();
      var anext = $("#anext");
      anext.on("ended", function () {
        window.location = right_url;
      });

      anext[0].play();
      click_enable = false;
    };
  } else {
    $("#next").css("display", "none");
  }
}

/* 보여지는지 */
function dp(id) {
  return $("#" + id).css("display") != "none";
}

/* 보여지지 않는지 */
function hd(id) {
  return $("#" + id).css("display") == "none";
}

/* 500 ms 이후에 실행 */
function tm(fun) {
  setTimeout(fun, 500);
}

function _trans(ani_idx) {
  $("#plus_box").css("opacity", "0");
  $("#mo_big" + ani_idx).animate({
    "opacity": "1",
    "left": "649"
  }, {
    duration: 500,
    easing: "linear"
  });
  $("#ja").animate({
    "opacity": "1",
    "left": "70"
  }, {
    duration: 500,
    easing: "linear"
  });
  setTimeout(function () {
    var ae = document.getElementById("a" + ani_idx);
    ae.play();
    $("#ja").css("opacity", "0");
    $("#mo_big" + ani_idx).css("opacity", "0");
    $("#fl" + ani_idx).css("opacity", "1");
    $("#d" + ani_idx).css("display", "none");
    $("#d" + ani_idx).css("opacity", "0");
    $("#bl" + ani_idx).css("opacity", "1");
    //$(ani_id).animate({"opacity":"1", "top":"0"}, {duration: 500, easing:"linear"});
  }, 800);

}

function popClose() {
  sa();
  $(".popup").css("opacity", "0");
  $("#popup,#play_popup").css("z-index", "0");
  $("#popClose,#play_popup").css("display", "none");

}

function popUp() {
  sa();
  $("#popup").css("opacity", "1");
  $("#popup").css("z-index", "100");
  $("#play_popup").css("z-index", "101");
  $("#popClose,#play_popup").css("display", "block");
  var audio = document.getElementById("a_popup");
  audio.play();

}

function _play_audio(file_name) {
  sa();
  var ae = document.getElementById(file_name);
  ae.play();
}

function _play_jimun(idx) {
  sa();
  var ae = document.getElementById("a" + idx);
  ae.onended = function () {
    if (idx == 1) {
      if (chk_1 == false) {
        $(".click" + idx).css("display", "block");
      }
    } else if (idx == 2) {
      if (chk_2 == false) {
        $(".click" + idx).css("display", "block");
      }
    } else if (idx == 3) {
      if (chk_3 == false) {
        $(".click" + idx).css("display", "block");
      }
    }
  }
  ae.play();
}

function _check_next() {


  if (first == true) {

    // startShowStar();
    cha2_start();

    setTimeout(function () {
      var sss = $("#fin")[0];
      sss.play();
      sss.onended = function () {
        // _flower_end();
        // $("#flowers").css("z-index","0");
      }
      sendCompletedClass('1');
      // $("#flowers").css("z-index","100");
      // _flower_start();

    }, 2000);
  }
}


function _iclick(jnum, ox, idx) {
  sa();
  console.log(cur_index);
  var a_ox = document.getElementById("a_" + ox);
  a_ox.onended = function () {
    var a_correct = document.getElementById("a_correct");
    var a_incorrect = document.getElementById("a_incorrect");
    if (idx == 1) {
      a_correct.play();
      $("#ans" + jnum).css("opacity", "1");
      $(".click" + jnum).css("display", "none");
      _chk_end(jnum);

    } else {
      a_incorrect.play();

    }
  }
  a_ox.play();
}

function _chk_end(idx) {
  if (idx == 1) {
    chk_1 = true;
  } else if (idx == 2) {
    chk_2 = true;
  } else if (idx == 3) {
    chk_3 = true;
  }
  if (chk_1 == true && chk_2 == true && chk_3 == true) {
    //   startShowStar();
    first = true;
    _check_next();

  }

}

//function _play(cur_index) {
//
//  console.log(cur_index);
//	if (cur_index < max_index) {
//    $(".click").css("display","none");
//    var ae= document.getElementById("a"+cur_index) ;
//    ae.onended = function(){
//      $(".click"+cur_index).css("display","block");
//
//    }
//    ae.play();
//
//	} else {
//
//    startShowStar();
//    setTimeout(function(){
//      $("#next").css("display","block");
//      $("#next_arrow").css("display","block");
//      //$("#click_pop").css("display","none");
//
//      //$("#prev").css("display","block") ;
//      _blink("next_arrow",500);
//
//    },2000) ;
//  }
//}

var jj = 1;

function _blink(bid, ae) {
  var my_timer = ae;
  img_blink = setInterval(function () {

    if (jj++ % 2 == 0) {
      $("#" + bid).css("opacity", "0");
    } else {
      $("#" + bid).css("opacity", "1");
    }
  }, my_timer);
}

var audioCtx;
function init() {

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  createByDong();
  // var intro = document.getElementById('a_intro');
  // intro.volume = 1.5;
  
  // intro.play();
  // loadStarAnimation() ;

}

function createByDong() {
  audioCtx.resume().then(() => {
    var intro = document.getElementById('a_intro');
    var source = audioCtx.createMediaElementSource(intro);
  
    var gainNode = audioCtx.createGain();
    source.connect(gainNode);
  
    gainNode.gain.value = 1.2;
    source.onended = function () {
      // console.log("init:"+cur_index);
      cur_index = 1;
      $("#click_pop, .jclick, #play_audio, .click").css("display", "block");
    }
    
    source.start();
    console.log('212121212');
  });
}

$(window).on("load", function () {

  init();
});