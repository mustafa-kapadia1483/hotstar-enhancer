const WATERMARK_CLASS_SELECTOR = ".watermark-content";

function removeWatermark(waterMarkContainer) {
  console.log("Removing: ", waterMarkContainer);
  waterMarkContainer?.remove();
}

const observer = new MutationObserver(function (mutations, mutationInstance) {
  const watermarkContainer = document.querySelector(WATERMARK_CLASS_SELECTOR);
  if (watermarkContainer) {
    removeWatermark(watermarkContainer);
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
