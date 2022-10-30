function removeWatermark() {
  const waterMarkContainer =
    document.querySelector(".watermark-content") ?? null;
  console.log(waterMarkContainer);
  waterMarkContainer?.remove();
}

[
  "fullscreenchange",
  "webkitfullscreenchange",
  "mozfullscreenchange",
  "msfullscreenchange",
].forEach(eventType =>
  document.addEventListener(eventType, removeWatermark, false)
);
