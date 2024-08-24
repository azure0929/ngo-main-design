## 'NGO 동물보호단체 메인페이지 디자인'

<br>

### • 배포 주소: [https://ngo-main.netlify.app/](https://ngo-main.netlify.app/)

<br>

#### - 작업 기간: 2021.06

#### - 리팩토링: 2024.01

<br>

### 기술 스택

Development

<p>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
<img src="https://img.shields.io/badge/Jquery-0769AD?style=flat&logo=Jquery&logoColor=white" />
</p>

Config

<p>
<img src="https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white"/></a>
</p>

Environment

<p>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/></a>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/></a>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a>
</p>
<br>

### 전체 페이지

<img src="https://github.com/azure0929/ngo-main-design/assets/128226527/dd06c984-bf61-4c52-9e21-0c5b85cc35df" />

<br><br>

### 💻 주요 기능

---

- modal

```html
<!-- modal -->
<div class="modal-support">
  <div class="support">
    <i class="btn-close xi-close-thin"></i>
    <h1>후원신청서</h1>
    <h4>이름</h4>
    <label
      ><input type="text" placeholder="이름을 입력하세요." name="submit"
    /></label>
    <h4>이메일</h4>
    <label
      ><input type="email" placeholder="이메일을 입력하세요." name="submit"
    /></label>
    <h4>주소</h4>
    <label
      ><input type="address" placeholder="주소를 입력하세요." name="submit"
    /></label>
    <div class="support-check">
      <label><input type="checkbox" id="chk" /><em></em>정기후원</label>
      <label><input type="checkbox" id="chk" /><em></em>일시후원</label>
    </div>
    <a class="btn-submit" href="#none">제출하기</a>
  </div>
</div>
```

```javascript
/* 후원하기 버튼 Show Hide */
$(window).scroll(function () {
  /* 후원하기 버튼 부분 */
  if ($(window).scrollTop() > 300) {
    $(".btn-open").addClass("active");
  } else {
    $(".btn-open").removeClass("active");
  }
});

/* Btn */
$(".btn-open").click(function () {
  $(".modal-support, body").addClass("active");
});
$(".btn-close").click(function () {
  $(".modal-support, body").removeClass("active");
});
```

<br>

- accordion

```html
<section class="faq">
  <div class="faq-accordion">
    <p>FAQ</p>
    <div class="accordion">
      <input type="radio" name="faq" id="answer1" checked />
      <input type="radio" name="faq" id="answer2" />
      <input type="radio" name="faq" id="answer3" />
      <input type="radio" name="faq" id="answer4" />
      <input type="radio" name="faq" id="answer5" />
      <div class="btn-faq">
        <label for="answer1"
          >후원을 하고 싶습니다! 시작을 어떻게 하면 되는지 알려주세요</label
        >
        <label for="answer2">해외에서도 후원을 하루 수 있는 건가요?</label>
        <label for="answer3"
          >반려동물을 입양하고 싶습니다. 절차를 알고 싶어요.</label
        >
        <label for="answer4"
          >입양신청서를 팩스로 보냈는데 한 달간 연락이 오지 않고 있어요.</label
        >
        <label for="answer5"
          >반려동물과 생활한 경험이 없는데 입양해서 잘 키울 수 있을까요?</label
        >
      </div>
      <div class="faq-content">
        <div class="faq-introduce">
          <p>
            1) 정기후원<br />동물자유연대 홈페이지에서 후원하기를 선택하시어
            작성하시면 됩니다.<br />
            2) 일시후원<br />정기적으로 후원하는 것이 아닌 일회성으로
            후원해주시는 방법입니다.<br />
            3) 물품후원<br />보내주신 물품은 반려동물복지센터에서 소중하게
            사용됩니다.물품 수령 후 사랑곳간 게시판에 올려드리고 있어서 나중에도
            확인이 가능하십니다.
          </p>
        </div>
        <div class="faq-introduce">
          <p>
            해외에서도 동물자유연대 활동을 응원해 주고 싶은 분들 계시죠? 한국
            계좌나 신용카드가 없어서 후원을 망설이셨던 분들, 카카오페이로
            정기후원 가능하십니다!<br />
            멀리 해외에서도 동물자유연대를 응원해주시고 동물들의 복지 향상에
            힘을 실어주시는 후원자분들께 진심으로 감사드립니다.
          </p>
        </div>
        <div class="faq-introduce">
          <p>
            메인 > 입양 > 입양하기 메뉴에 입양절차가 안내되어 있습니다. 해당
            내용을 확인해 주세요.
          </p>
        </div>
        <div class="faq-introduce">
          <p>
            입양담당자가 접수된 신청서를 순차적으로 검토합니다.<br />입양신청서
            검토 후 입양이 부적합하다고 판단된 경우 또는 이미 다른 분과
            입양신청한 동물의 입양이 완료 단계에 있는 경우 개별 연락을 드리지
            못하고 있으니 이점 불편하시더라도 양해해 주시기 바랍니다.<br />대략
            신청서 검토 까지 일주일 정도 소요되오니 참고해 주시기 바랍니다.
          </p>
        </div>
        <div class="faq-introduce">
          <p>
            성공적인 입양이 되기 위해서 필요한 사전 점검사항이 있습니다.<br />원하는
            동물에 따라 사전에 충분히 정보를 수집하여 해당 동물의 특징을
            인지하고 직·간접적으로 경험을 하시는것이 중요합니다.<br />개들은
            짖기도하고 배변실수도 할 수 있으며, 매일 산책을 해주어야 합니다.<br />장시간
            혼자 두는 것 보다는 가족과 함께하는 시간이 많은 것이 좋습니다.
          </p>
        </div>
      </div>
    </div>
    <div class="sns">
      <a href="#none"><i class="fa fa-facebook"></i></a>
      <a href="#none"><i class="fa fa-instagram"></i></a>
      <a href="#none"><i class="fa fa-twitter"></i></a>
      <a href="#none"><i class="fa fa-youtube-play"></i></a>
    </div>
  </div>
</section>
```

```css
/* Section : Faq */
.faq {
  margin-top: 40px;
  height: 350px;
  padding-top: 20px;
  background: url(images/image-21.jpg);
}
.faq p {
  text-align: center;
  margin-top: 0;
  color: #f1f1f1;
  font-size: 24px;
}
.faq-accordion {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 320px;
  margin: auto;
}
.accordion {
  width: 430px;
  height: 220px;
  margin-left: 20px;
  margin-top: -15px;
}
.btn-faq {
  padding-top: 10px;
}
.accordion label {
  display: block;
  width: 430px;
  height: 30px;
  margin-top: 12px;
  padding: 0 10px;
  background-color: transparent;
  border: 2px solid #6699cc;
  border-radius: 10px;
  color: #f1f1f1;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition: 0.5s;
}
input[name="faq"] {
  display: none;
}

/* Faq Checked Funtion */
input[id="answer1"]:checked ~ .btn-faq label[for="answer1"],
input[id="answer2"]:checked ~ .btn-faq label[for="answer2"],
input[id="answer3"]:checked ~ .btn-faq label[for="answer3"],
input[id="answer4"]:checked ~ .btn-faq label[for="answer4"],
input[id="answer5"]:checked ~ .btn-faq label[for="answer5"] {
  background-color: #6699cc;
  border: none;
}
.faq-content {
  position: absolute;
  top: 57px;
  right: 0;
  width: 450px;
  height: 200px;
}
.faq-content p {
  text-align: left;
  font-size: 12px;
}
.faq-introduce {
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
}
input[id="answer1"]:checked ~ .faq-content .faq-introduce:nth-child(1),
input[id="answer2"]:checked ~ .faq-content .faq-introduce:nth-child(2),
input[id="answer3"]:checked ~ .faq-content .faq-introduce:nth-child(3),
input[id="answer4"]:checked ~ .faq-content .faq-introduce:nth-child(4),
input[id="answer5"]:checked ~ .faq-content .faq-introduce:nth-child(5) {
  opacity: 1;
  visibility: visible;
}
.faq .sns {
  text-align: center;
  margin-top: 32px;
}
.sns a {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6699cc;
  margin: 0 5px;
  color: #f1f1f1;
}

/* input[type=checkbox] */
input[type="checkbox"] {
  display: none;
}
```
