var doneLoadingImages = false;
function getWiddle() {
  window.location = "https://widdle.it/download/";
}
function goToByScroll(id, offset) {
  id = id.replace("link", "");
  $("html,body").animate(
    { scrollTop: $("#" + id).offset().top + offset },
    1000
  );
}
function load_images() {
  $(window).load(function () {
    var imgs = new Array();
    var c = 0;
    $(".halfSized").each(function () {
      imgs[c] = $(this);
      c++;
    });
    var imgLength = imgs.length;
    for (var i = 0; i < imgLength; i++) {
      var imgWidth = imgs[i][0].width;
      var imgHeight = imgs[i][0].height;
      var nH = imgHeight / 2;
      var nW = imgWidth / 2;
      $(".halfSized").eq(i).attr({ width: nW, height: nH });
    }
    doneLoadingImages = true;
    if (doneLoadingImages) {
      $("img").fadeIn(1000);
      $("#topDownload").fadeIn(1000);
    }
  });
}
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    }
  );
  return vars;
}
function learnScroll(e) {
  e.preventDefault();
  goToByScroll($("#learnMore").attr("goto"), 0);
}
$(document).ready(function () {
  var r = getUrlVars()["r"];
  if (r == "iOS") {
    ga("send", "event", "URL_Referral", "iOS");
  }
  var isMobile =
    navigator.userAgent.toLowerCase().indexOf("mobile") != -1 &&
    navigator.userAgent.toLowerCase().indexOf("ipad") == -1;
  $(".halfSized").each(function () {
    $(this).css("display", "none");
  });
  if (!isMobile) {
    $(".video").videoBG({
      position: "fixed",
      zIndex: -1,
      mp4: "../assets/video/widdle.mp4",
      ogv: "../assets/video/widdle.ogv",
      webm: "../assets/video/widdle.webm",
      opacity: 1,
      autoplay: 1,
      height: "100%",
      width: "100%",
    });
    $(".video .video").css("display", "none");
  }
  $("#aj").click(function (e) {
    if ($("#aj-img").hasClass("red")) {
      $("#bio1").slideUp("slow");
      $("#aj-img").removeClass("red");
      $("#aj-img").attr("src", "../assets/img/Aj.png");
    } else {
      if ($("#bio1").css("display") == "none") {
        $("#bio1").slideDown("slow");
        $("#bio2").slideUp("slow");
        $("#cory-img").removeClass("red");
        $("#stephen-img").removeClass("red");
      }
      $("#aj-img").attr("src", "../assets/img/Aj-Red.png");
      $("#aj-img").addClass("red");
      $("#matt-img").attr("src", "../assets/img/Matt.png");
      $("#meghan-img").attr("src", "../assets/img/Meghan.png");
      $("#cory-img").attr("src", "../assets/img/Cory.png");
      $("#stephen-img").attr("src", "../assets/img/Steven.png");
      $(".matt").css("display", "none");
      $(".meghan").css("display", "none");
      $(".aj").css("display", "block");
    }
  });
  $("#matt").click(function (e) {
    if ($("#matt-img").hasClass("red")) {
      $("#bio1").slideUp("slow");
      $("#matt-img").removeClass("red");
      $("#matt-img").attr("src", "../assets/img/Matt.png");
    } else {
      if ($("#bio1").css("display") == "none") {
        $("#bio1").slideDown("slow");
        $("#bio2").slideUp("slow");
        $("#cory-img").removeClass("red");
        $("#stephen-img").removeClass("red");
      }
      $("#aj-img").attr("src", "../assets/img/Aj.png");
      $("#matt-img").addClass("red");
      $("#matt-img").attr("src", "../assets/img/Matt-Red.png");
      $("#meghan-img").attr("src", "../assets/img/Meghan.png");
      $("#cory-img").attr("src", "../assets/img/Cory.png");
      $("#stephen-img").attr("src", "../assets/img/Steven.png");
      $(".aj").css("display", "none");
      $(".meghan").css("display", "none");
      $(".matt").css("display", "block");
    }
  });
  $("#meghan").click(function (e) {
    if ($("#meghan-img").hasClass("red")) {
      $("#bio1").slideUp("slow");
      $("#meghan-img").removeClass("red");
      $("#meghan-img").attr("src", "../assets/img/Meghan.png");
    } else {
      if ($("#bio1").css("display") == "none") {
        $("#bio1").slideDown("slow");
        $("#bio2").slideUp("slow");
        $("#cory-img").removeClass("red");
        $("#stephen-img").removeClass("red");
      }
      $("#meghan-img").addClass("red");
      $("#aj-img").attr("src", "../assets/img/Aj.png");
      $("#matt-img").attr("src", "../assets/img/Matt.png");
      $("#meghan-img").attr("src", "../assets/img/Meghan-Red.png");
      $("#cory-img").attr("src", "../assets/img/Cory.png");
      $("#stephen-img").attr("src", "../assets/img/Steven.png");
      $(".aj").css("display", "none");
      $(".matt").css("display", "none");
      $(".meghan").css("display", "block");
    }
  });
  $("#cory").click(function (e) {
    if ($("#cory-img").hasClass("red")) {
      $("#bio2").slideUp("slow");
      $("#cory-img").removeClass("red");
      $("#cory-img").attr("src", "../assets/img/Cory.png");
    } else {
      if ($("#bio2").css("display") == "none") {
        $("#bio1").slideUp("slow");
        $("#bio2").slideDown("slow");
        $("#matt-img").removeClass("red");
        $("#aj-img").removeClass("red");
        $("#meghan-img").removeClass("red");
      }
      $("#cory-img").addClass("red");
      $("#aj-img").attr("src", "../assets/img/Aj.png");
      $("#matt-img").attr("src", "../assets/img/Matt.png");
      $("#meghan-img").attr("src", "../assets/img/Meghan.png");
      $("#cory-img").attr("src", "../assets/img/Cory-Red.png");
      $("#stephen-img").attr("src", "../assets/img/Steven.png");
      $(".stephen").css("display", "none");
      $(".cory").css("display", "block");
    }
  });
  $("#stephen").click(function (e) {
    if ($("#stephen-img").hasClass("red")) {
      $("#bio2").slideUp("slow");
      $("#stephen-img").removeClass("red");
      $("#stephen-img").attr("src", "../assets/img/Steven.png");
    } else {
      if ($("#bio2").css("display") == "none") {
        $("#bio1").slideUp("slow");
        $("#bio2").slideDown("slow");
        $("#matt-img").removeClass("red");
        $("#aj-img").removeClass("red");
        $("#meghan-img").removeClass("red");
      }
      $("#stephen-img").addClass("red");
      $("#aj-img").attr("src", "../assets/img/Aj.png");
      $("#matt-img").attr("src", "../assets/img/Matt.png");
      $("#meghan-img").attr("src", "../assets/img/Meghan.png");
      $("#cory-img").attr("src", "../assets/img/Cory.png");
      $("#stephen-img").attr("src", "../assets/img/Steven-Red.png");
      $(".cory").css("display", "none");
      $(".stephen").css("display", "block");
    }
  });
});
