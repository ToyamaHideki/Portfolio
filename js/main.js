document.addEventListener("DOMContentLoaded", () => {
//     const cursor = document.querySelector(".custom-cursor");

//     gsap.set(cursor, { xPercent: -50, yPercent: -50 });

//     document.addEventListener("mousemove", (event) => {
//     gsap.to(cursor, {
//         duration: 0.5,
//         x: event.clientX,
//         y: event.clientY,
//     });
// })

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
    rotation:"+=90"
  });
});

const title = document.querySelector('.maintitle');
const shadow = document.querySelector('.title-shadow');
const deepShadow = document.querySelector('.title-deep-shadow');

const calculateDistance = (el, mouseX, mouseY) => {
  const { top, left, width, height } = el.getBoundingClientRect();
  const centerX = left + width / 2;
  const centerY = top + height / 2;
  const distanceX = mouseX - centerX;
  const distanceY = mouseY - centerY;
  return { distanceX, distanceY };
}

document.addEventListener('mousemove', e => {
  const { distanceX, distanceY } = calculateDistance(title, e.clientX, e.clientY);
  gsap.to(shadow, {
    x: -distanceX * 0.04,
    y: -distanceY * 0.04,
    duration: 10
  });
  gsap.to(deepShadow, {
    x: -distanceX * 0.1,
    y: -distanceY * 0.1,
    duration: 20
  });
});


});
