/* 후원하기 버튼 Show Hide */
$(window).scroll(function () {
  /* 후원하기 버튼 부분 */
  if ($(window).scrollTop() > 300) {
    $(".btn-open").addClass("active");
  } else {
    $(".btn-open").removeClass("active");
  }

  /* 상단으로 가기 부분 */
  if ($(window).scrollTop() > 300) {
    $(".top").addClass("active");
  } else {
    $(".top").removeClass("active");
  }
});

/* Btn */
$(".btn-open").click(function () {
  $(".modal-support, body").addClass("active");
});
$(".btn-close").click(function () {
  $(".modal-support, body").removeClass("active");
});
