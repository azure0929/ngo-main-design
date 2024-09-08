$(document).ready(function () {
  AOS.init();

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

  // bar 버튼 이벤트
  $(".bar").on("click", function () {
    $(".sidebar").addClass("active");
    $(this).css("display", "none");
  });
  $(".close-btn i").on("click", function () {
    $(".sidebar").removeClass("active");
    $(".bar").css("display", "block");
  });

  // a 태그를 클릭했을 때 이벤트
  // 모든 서브메뉴를 숨깁니다.
  $(".submenu").hide();

  // wrap 클릭 시 이벤트 처리
  $(".wrap").click(function (e) {
    e.preventDefault(); // 링크의 기본 동작을 막습니다.

    // 현재 클릭한 wrap의 서브메뉴를 선택합니다.
    const $submenu = $(this).find(".submenu");

    // 클릭한 wrap의 서브메뉴가 보이지 않는다면, 보여주기
    if ($submenu.is(":hidden")) {
      // 모든 서브메뉴를 숨깁니다.
      $(".submenu").slideUp();

      // 클릭한 wrap의 서브메뉴만 보여줍니다.
      $submenu.slideDown();
    } else {
      // 클릭한 wrap의 서브메뉴가 보이는 상태라면, 숨깁니다.
      $submenu.slideUp();
    }
  });

  /* Btn */
  $(".btn-open, footer .support button").click(function () {
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
