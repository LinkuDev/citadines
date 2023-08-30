const slider = document.querySelector(".food-list");
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

slider.addEventListener("click", (e) => {
  alert("hoạt động");
});
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPos = e.clientX;
  slider.style.transition = "none";
  prevTranslate = currentTranslate;

  function animation() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) requestAnimationFrame(animation);
  }
  animation();
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const currentPosition = e.clientX;
  currentTranslate = prevTranslate + currentPosition - startPos;
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  const moveBy = currentTranslate - prevTranslate;

  if (moveBy < -100) {
    currentTranslate = prevTranslate - slider.offsetWidth;
  } else if (moveBy > 100) {
    currentTranslate = prevTranslate + slider.offsetWidth;
  }

  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

slider.addEventListener("mouseleave", () => {
  isDragging = false;
  slider.style.transition = "transform 0.3s ease-in-out";
  slider.style.transform = `translateX(${currentTranslate}px)`;
});
