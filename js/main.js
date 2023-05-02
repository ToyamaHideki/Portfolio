document.addEventListener("DOMContentLoaded", () => {
  revealInit();
  mainTitleShadowInit();

  setTimeout(()=>{dispCharTitle(".subtitle")},2000)

  window.addEventListener("scroll", function () {
    ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
  });
});

window.addEventListener("load", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});

// 影の動作をGSAPで制御
const mainTitleShadowInit = function () {
  const title = document.querySelector(".maintitle");
  const shadow = document.querySelector(".title-shadow");
  const deepShadow = document.querySelector(".title-deep-shadow");

  const calculateDistance = (el, mouseX, mouseY) => {
    const { top, left, width, height } = el.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    return { distanceX, distanceY };
  };

  // キービジュアルの影の取り扱いの計算
  document.addEventListener("mousemove", (e) => {
    const { distanceX, distanceY } = calculateDistance(
      title,
      e.clientX,
      e.clientY
    );
    gsap.to(title, {
      x: -distanceX * 0.01,
      y: -distanceY * 0.01,
      duration: 0.5,
    });
    gsap.to(shadow, {
      x: (-distanceX * 0.1) / 7,
      y: (-distanceY * 0.1) / 7,
      duration: 4,
    });
    gsap.to(deepShadow, {
      x: -distanceX * 0.04,
      y: -distanceY * 0.04,
      duration: 2,
    });
  });
};

// スクロール処理を関数にまとめる
const revealInit = function () {
  ScrollReveal().reveal(".section__title", {
    duration: 1600,
    delay: 50,
    origin: "top",
    distance: "20px",
    reset: false,
  });

  // ========================== PROFILE ==========================
  ScrollReveal().reveal(".profile__imageContainer", {
    duration: 1600,
    delay: 100,
    origin: "left",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__top", {
    duration: 1600,
    delay: 100,
    origin: "right",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__desc", {
    duration: 1600,
    delay: 300,
    origin: "right",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__list__fst", {
    duration: 1600,
    delay: 500,
    origin: "right",
    distance: "10px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__list__snd", {
    duration: 1600,
    delay: 600,
    origin: "right",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__list__thd", {
    duration: 1600,
    delay: 700,
    origin: "right",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__list__frth", {
    duration: 1600,
    delay: 800,
    origin: "right",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".reveal__list__fifth", {
    duration: 1600,
    delay: 900,
    origin: "right",
    distance: "20px",
    reset: false,
  });


  ScrollReveal().reveal(".timeline li", {
    duration: 1600,
    delay: 100,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".image-container", {
    duration: 1600,
    delay: 500,
    origin: "top",
    distance: "20px",
    reset: false,
  });

  ScrollReveal().reveal(".profile-text-container", {
    duration: 1600,
    delay: 600,
    origin: "top",
    distance: "20px",
    reset: false,
  });


  ScrollReveal().reveal(".maintitle", {
    duration: 4000,
  });
};

// 文字を分割して表示する処理
// タイピングされたように表示される
const dispCharTitle = (className) => {
  const charSet = document.querySelector(className);
  const charSetText = charSet.textContent;
  const delay = 100;

  charSet.textContent = "";
  for (let i = 0; i < charSetText.length; i++) {
    setTimeout(() => {
      charSet.textContent += charSetText[i];
      charSet.style.opacity = 1;
    }, delay * i);
  }
};

// Career コンポーネントのスクロール検知とライン描写の設定
const ScrollTimelineAnime = function () {
  const listItems = document.querySelectorAll(".timeline li");
  const startPoint = 100; // 線をスタートさせる位置を指定 ※レイアウトによって調整してください

  listItems.forEach((item) => {
    const elemPos = item.offsetTop; // 上からの高さ取得
    const scroll = window.pageYOffset; // スクロール値取得
    const windowHeight = window.innerHeight; // windowの高さ取得

    if (scroll >= elemPos - windowHeight - startPoint) {
      const H = item.offsetHeight; // liの余白と高さを含めた数値を取得
      const percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100; // liの余白と高さの半分で線を100％に伸ばす

      // 100% を超えたらずっと 100% を入れ続ける
      const borderLine = item.querySelector(".border-line");
      if (percent > 100) {
        borderLine.style.height = "100%"; //CSSでパーセント指定
      } else {
        borderLine.style.height = percent + "%"; //CSSでパーセント指定
      }
    }
  });
};
