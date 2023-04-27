document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".section__title", {
    duration: 1600,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".skill__wrap", {
    duration: 1600,
    delay:100,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".timeline li", {
    duration: 1600,
    delay:100,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".image-container", {
    duration: 1600,
    delay:500,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".profile-text-container", {
    duration: 1600,
    delay:600,
    origin: "top",
    distance: "20px",
    reset: false,
  });
  ScrollReveal().reveal(".profile-list", {
    duration: 1600,
    delay:700,
    origin: "top",
    distance: "20px",
    reset: false,
  });

  ScrollReveal().reveal(".maintitle", {
    duration: 4000,
  });

  setTimeout(() => {
    dispCharSubtitle();
  }, 2000);

  const cursor = document.querySelector(".custom-cursor");
  const links = document.querySelectorAll("a");

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 2,
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        duration: 0.3,
        scale: 1,
      });
    });
  });

  document.addEventListener("mousemove", (event) => {
    gsap.to(cursor, {
      duration: 0.1,
      x: event.clientX,
      y: event.clientY,
      rotation: "+=90",
    });
  });

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

  // Career コンポーネントのスクロール検知とライン描写の設定
  function ScrollTimelineAnime() {
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
  }

  window.addEventListener("scroll", function () {
    ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
  });
});

window.addEventListener("load", function () {
  ScrollTimelineAnime(); // 線が伸びる関数を呼ぶ
});



// タイピングされたように表示される
const dispCharSubtitle = () => {
  const subtitle = document.querySelector(".subtitle");
  const subtitleText = subtitle.textContent;
  const delay = 100;

  subtitle.textContent = "";

  for (let i = 0; i < subtitleText.length; i++) {
    setTimeout(() => {
      subtitle.textContent += subtitleText[i];
      subtitle.style.opacity = 1;
    }, delay * i);
  }
};
