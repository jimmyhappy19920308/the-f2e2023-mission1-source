import "./assets/scss/all.scss";
// import "bootstrap/dist/js/bootstrap.min.js";
import * as bootstrap from "bootstrap/dist/js/bootstrap.min.js";

const donateDatas = [
  {
    itemTypeImgPath: "../assets/images/抖內好健康.png",
    itemTypeImgPathMobile: "../assets/images/好健康.png",
    itemName: "溜冰鞋",
    itemPrice: "600",
    itemCount: "234,567",
    itemPhotoPath: "../assets/images/donate_shoe 1.png",
  },
  {
    itemTypeImgPath: "../assets/images/抖內好身材.png",
    itemTypeImgPathMobile: "../assets/images/好身材.png",
    itemName: "條紋泳衣",
    itemPrice: "6,000",
    itemCount: "234,567",
    itemPhotoPath: "../assets/images/donate_cloth 1.png",
  },
  {
    itemTypeImgPath: "../assets/images/抖內好出遊.png",
    itemTypeImgPathMobile: "../assets/images/好出遊.png",
    itemName: "超跑模型",
    itemPrice: "60,000",
    itemCount: "234,567",
    itemPhotoPath: "../assets/images/donate_car 1.png",
  },
  {
    itemTypeImgPath: "../assets/images/抖內好心意.png",
    itemTypeImgPathMobile: "../assets/images/好心意.png",
    itemName: "直接捐款",
    itemPrice: "100",
    itemCount: "234,567",
    itemPhotoPath: "../assets/images/donate_piggy.png",
  },
];

console.log("Hello world!");

// const myModal = new bootstrap.Modal(
//   document.getElementById("#exampleModal"),
//   // options
// );

const donateModal = new bootstrap.Modal("#donateModal");
const donateSuccessModal = new bootstrap.Modal("#donateSuccessModal");
const mobileDonateModal = new bootstrap.Modal("#mobileDonateModal");


$(document).ready(function () {
  $(".policy-list").slick({
    // setting-name: setting-value
    dots: true,
    speed: 500,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    // prevArrow: "<button type='button' class='policy-list-prev'><img class='' src='@/images/arrow.svg'></button>",
  });

  $("a").click(function (e) {
    e.preventDefault();
  });

  $(".donate-btn").on("click", function () {}, donate);
  $(".mobile-donate-btn").on("click", function () {}, donateOnMobile);
  $(".confirm-donate").on("click", function () {}, confirmDonate);

  $(".donate-list-item-content-much").on("input", function () {}, changeMoney);

  $("#donateModal").on("hidden.bs.modal", function () {});

  $("#mobileDonateModal").on("hidden.bs.modal", function () {
    $("#mobileDonateModal .modal-body").html("");
  });

  $(".mobile-social-media-btn").on("click", function () {
    $(".mobile-social-list").slideToggle();
    $(this).toggleClass("close");
  });

  $(".menu-btn").on("click", function () {
    $(this).toggleClass("open");
  });

  $(".nav-link").on("click", function () {}, goArea);

});

function goArea(params) {
  const id = $(this).attr("data-id");

  // 取得目標區塊的 y 座標
  const target_top = $("#"+id).offset().top - 80; // 80 為 navbar height


   // 移動捲軸有動畫效果
  $('html').animate({
    scrollTop: target_top
  }, 500);
}

function donate(event) {
  const index = event.target.dataset.index;
  console.log(index);
  $("#donateModal .modal-header").html(
    `
    <h2 class="donate-modal-title d-flex justify-content-center w-100 position-relative">
      <img src="${donateDatas[index].itemTypeImgPath}" alt="" class="">
    </h2>
    <a
              href="#"
              class="btn-close mt-4"
              data-bs-dismiss="modal"
              aria-label="Close"
              ><img src="../assets/images/donate-close.svg" alt=""
            /></a>
    `
  );
  $("#donateModal .modal-body").html(
    `
    
    <p class="donate-modal-content text-center lh-1 mb-10">
    <span class="head3 fw-bold me-5">抖內金額</span><span class="font-family-inter b2 me-2">NT$</span
    ><span class="font-family-inter text-primary head1-l fw-bold me-5">${donateDatas[index].itemPrice}</span><span class="font-family-inter b2">${donateDatas[index].itemCount}</span
    ><span class="b2">人已贊助</span>
  </p>
  <div class="d-flex">
    <div class="w-50 me-6">
      <p class="font-family-noto fw-bold b1 mb-3">收件人資料</p>
      <div class="d-flex align-items-center inner-addon left-addon mb-5">
        <img
          src="../assets/images/donate-user.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="text"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donateUserInput"
          aria-describedby="donateUserHelp"
          placeholder="您的大名"
        />
      </div>
      <div class="d-flex align-items-center inner-addon left-addon mb-5">
        <img
          src="../assets/images/donate-phone.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="tel"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donatePhoneInput"
          aria-describedby="donatePhoneHelp"
          placeholder="手機號碼"
        />
      </div>
      <div class="d-flex align-items-center inner-addon left-addon">
        <img
          src="../assets/images/donate-location.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="text"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donateLocationInput"
          aria-describedby="donateLocationHelp"
          placeholder="地址"
        />
      </div>
    </div>
    <div class="d-flex flex-column w-50">
      <p class="font-family-noto fw-bold b1 mb-3">支付方式</p>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5 mb-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault1">
          信用卡付款
        </label>
      </div>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5 mb-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault2">
          LINE Pay
        </label>
      </div>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault3">
          超商付款
        </label>
      </div>
    </div>
  </div>
    `
  );
  donateModal.show();
}

function donateOnMobile(event) {
  const index = event.target.dataset.index;
  console.log(index);
  $("#mobileDonateModal .modal-body").removeClass("overflow-y-scroll");
  $("#mobileDonateModal .modal-body").removeClass("h-75vh");
  $("#mobileDonateModal .modal-header").html(
    `
    <h2 class="donate-modal-title d-flex justify-content-center w-100 position-relative">
      <img src="${donateDatas[index].itemTypeImgPathMobile}" alt="" class="">
    </h2>
    `
  );

  $("#mobileDonateModal .modal-body").html(
    `
    <div class="d-flex flex-column align-items-center">
    <img src="${donateDatas[index].itemPhotoPath}" alt="" style="width: 10rem;">
    <p class="text-primary head3 fw-bold lh-1 mt-2 mb-5">${donateDatas[index].itemName}</p>
    <p class="mb-5"><span class="font-family-inter lh-1 b2 me-2">NT$</span><span class="head2 fw-bold font-family-inter lh-1">${donateDatas[index].itemPrice}</span></p>
    <p class="mb-5"><span class="font-family-inter lh-1 b2">${donateDatas[index].itemCount}</span><span class="font-family-noto lh-1 b2 ms-1">人已贊助</span></p>
    <div class="w-100">
      <button
      type="button"
      aria-label="Confirm"
      data-index=${index}
      class="btn btn-primary mobile-go-to-donate-detail-btn font-family-noto text-white lh-1 fw-medium rounded-pill py-4 mx-auto my-0 mb-5 w-100"
    >
      抖內去
    </button>
    </div>
    <div class="w-100">
      <button
      type="button"
      data-bs-dismiss="modal"
      aria-label="Close"
      class="d-flex justify-content-center align-items-center btn bg-body-secondary border-dark-subtle font-family-noto text-dark-emphasis lh-1 fw-medium rounded-pill py-4 mx-auto my-0 w-100"
    >
    <img src="../assets/images/donate-close.svg" alt="" class="me-2" style="width: 20px;"
    />關閉
    </button>
    </div>
  </div>
    `
  );

  $(".mobile-go-to-donate-detail-btn").on(
    "click",
    function () {},
    goToDonateDetailMobile
  );

  mobileDonateModal.show();
}

function donateOnMobileStep2() {}

function changeMoney(event) {
  console.log(event.target.value);
  const value = event.target.value.trim();
  if (value.length <= 8) {
    donateDatas[3].itemPrice = value;
  }
}

function confirmDonate() {
  // donateModal.dispose();
  $("#donateModal").modal("hide");
  donateSuccessModal.show();
  $("#donateSuccessModal").html(
    `
      <div class="modal-dialog modal-dialog-centered bg-transparent">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body d-flex flex-column justify-content-center align-items-center pb-0 mb-10">
            <img src="../assets/images/donate-success.png" alt="" />
            <p class="text-white b1 lh-1 font-family-noto mt-10">已收到您的抖內，謝謝您！</p>
          </div>
          <div class="modal-footer border-top-0 pt-0">
          <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          class="btn btn-primary close-donate font-family-noto text-white lh-1 b1 fw-medium rounded-pill py-4 mx-auto my-0"
        >
          關閉
        </button>
          </div>
        </div>
      </div>
      `
  );
}

function confirmDonateMobile() {
  console.log("Please");
  $("#mobileDonateModal").modal("hide");
  donateSuccessModal.show();
  $("#donateSuccessModal").html(
    `
      <div class="modal-dialog modal-dialog-centered bg-transparent">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-body d-flex flex-column justify-content-center align-items-center pb-0 mb-10">
            <img src="../assets/images/donate-success.png" alt="" / class="mobile-donate-success-photo">
            <p class="text-white b2 lh-1 font-family-noto mt-10">已收到您的抖內，謝謝您！</p>
          </div>
          <div class="modal-footer border-top-0 px-10 pt-0">
          <button
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
          class="btn btn-primary font-family-noto text-white lh-1 b1 fw-medium rounded-pill w-100 py-4 mx-auto my-0"
        >
          關閉
        </button>
          </div>
        </div>
      </div>
      `
  );
}

function goToDonateDetailMobile(event) {
  const index = event.target.dataset.index;
  console.log(index);
  $("#mobileDonateModal .modal-body").addClass("overflow-y-scroll");
  $("#mobileDonateModal .modal-body").addClass("h-75vh");

  $('#mobileDonateModal .modal-body').scrollTop(0);
  $("#mobileDonateModal .modal-body").html("");

  $("#mobileDonateModal .modal-body").html(
    `
    
    <p class="donate-modal-content text-center lh-1 mb-5">
      <span class="head3 fw-bold me-5">抖內金額
    </p>
    <p class="donate-modal-content text-center lh-1 mb-5">
      <span class="font-family-inter b2 me-2">NT$</span><span class="font-family-inter text-primary head1-l fw-bold me-5">${donateDatas[index].itemPrice}</span>
    </p>
    <p class="text-center mb-5">
      <span class="font-family-inter b2">${donateDatas[index].itemCount}</span><span class="b2">人已贊助</span>
    </p>
  <div class="d-flex flex-column">
    <div class="">
      <p class="font-family-noto fw-bold b1 mb-3">收件人資料</p>
      <div class="d-flex align-items-center inner-addon left-addon mb-5">
        <img
          src="../assets/images/donate-user.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="text"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donateUserInput"
          aria-describedby="donateUserHelp"
          placeholder="您的大名"
        />
      </div>
      <div class="d-flex align-items-center inner-addon left-addon mb-5">
        <img
          src="../assets/images/donate-phone.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="tel"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donatePhoneInput"
          aria-describedby="donatePhoneHelp"
          placeholder="手機號碼"
        />
      </div>
      <div class="d-flex align-items-center inner-addon left-addon mb-6">
        <img
          src="../assets/images/donate-location.svg"
          alt=""
          class="glyphicon glyphicon-user align-middle"
        />
        <input
          type="text"
          class="form-control form-control-sm donate-modal-info-input text-black b2 lh-1 ps-14 py-5 border-0"
          id="donateLocationInput"
          aria-describedby="donateLocationHelp"
          placeholder="地址"
        />
      </div>
    </div>
    <div class="d-flex flex-column">
      <p class="font-family-noto fw-bold b1 mb-3">支付方式</p>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5 mb-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault1">
          信用卡付款
        </label>
      </div>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5 mb-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault2">
          LINE Pay
        </label>
      </div>
      <div class="form-check d-flex align-items-center bg-white rounded-3 ps-0 py-5 mb-5">
        <input class="form-check-input lh-1 ms-4" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
        <label class="form-check-label lh-1 b2 ms-2" for="flexRadioDefault3">
          超商付款
        </label>
      </div>
    </div>
  </div>
  <div class="w-100">
      <button
      type="button"
      aria-label="Confirm"
      data-index=${index}
      class="btn btn-primary mobile-confirm-donate-btn font-family-noto text-white lh-1 fw-medium rounded-pill py-4 mx-auto my-0 mb-5 w-100"
    >
      確認抖內
    </button>
    </div>
    <div class="w-100">
      <button
      type="button"
      data-bs-dismiss="modal"
      aria-label="Close"
      class="d-flex justify-content-center align-items-center btn bg-body-secondary border-dark-subtle font-family-noto text-dark-emphasis lh-1 fw-medium rounded-pill py-4 mx-auto my-0 w-100"
    >
    <img src="../assets/images/donate-close.svg" alt="" class="me-2" style="width: 20px;"
    />關閉
    </button>
    </div>
    `
  );
  $(".mobile-confirm-donate-btn").on(
    "click",
    function () {},
    confirmDonateMobile
  );
}


