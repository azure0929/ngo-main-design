$(document).ready(function () {
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
    $(".modal, body").addClass("active");
  });
  $(".btn-close").click(function () {
    $(".modal, body").removeClass("active");
  });

  // 이름 입력 검증
  $("#nameInput").on("input", function () {
    const value = $(this).val();
    const regex = /^[가-힣a-zA-Z]*$/;

    if (regex.test(value)) {
      $(this).css("border", "1px solid blue");
    } else {
      $(this).css("border", "1px solid red");
    }
  });

  // 이메일 입력 검증
  $("#emailInput").on("input", function () {
    const value = $(this).val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {
      $(this).css("border", "1px solid blue");
    } else {
      $(this).css("border", "1px solid red");
    }
  });

  // 입력 필드가 초기화될 때 테두리 색상 변경
  $(".modal input").on("input", function () {
    const value = $(this).val();
    if (value === "") {
      $(this).css("border", "1px solid #cbcbcb");
    }
  });
});

// Daum 주소 검색 API
function execDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 도로명 주소 또는 지번 주소
      const fullAddr = data.roadAddress ? data.roadAddress : data.jibunAddress;
      $("#addressInput").val(fullAddr);
    },
  }).open();
}
