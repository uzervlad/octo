const images = document.querySelectorAll(".project>img");
for(let image of images) {
  let viewer = new Viewer(image.parentNode, {
    backdrop: true,
    button: false,
    focus: true,
    fullscreen: true,
    loading: false,
    loop: false,
    keyboard: true,
    movable: true,
    navbar: false,
    rotatable: false,
    scalable: true,
    slideOnTouch: true,
    title: () => image.dataset.title,
    toggleOnDblclick: true,
    toolbar: false,
    tooltip: false,
    transition: true,
    zoomable: true,
    zoomOnTouch: true,
    zoomOnWheel: true,
  });

  image.addEventListener("click", _ => viewer.show());
}
