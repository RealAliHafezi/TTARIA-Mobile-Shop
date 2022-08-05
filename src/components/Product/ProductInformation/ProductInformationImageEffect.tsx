import React from "react";

export function ProductInformationImageZoom(imgID: string, resultID: string) {
  let img: HTMLImageElement | null,
    result: HTMLDivElement | null,
    lens: HTMLElement,
    cx: number,
    cy: number;
  img = document.querySelector(`.swiper-slide-active .${imgID}`);
  result = document.querySelector(`.${resultID}`);
  /* Create lens: */
  lens = document.createElement("DIV");
  lens.setAttribute("class", "img-zoom-lens");
  /* Insert lens: */
  if (img && result) {
    img.parentElement?.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    // 200 => result width and height
    cx = 250 / lens.offsetWidth;
    cy = 250 / lens.offsetHeight;
    /* Set background properties for the result DIV */
    result.style.backgroundImage = `url("${img.src}")`;
    result.style.backgroundSize =
      img.width * cx + "px " + img.height * cy + "px";
  }
  /* Execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener("mousemove", moveLens);
  img?.addEventListener("mousemove", moveLens);
  lens.addEventListener("mouseleave", () => {
    lens.style.display = "none";
  });
  /* And also for touch screens: */
  img?.addEventListener("touchmove", moveLens);
  lens.addEventListener("touchmove", moveLens);
  function moveLens(e: MouseEvent | TouchEvent) {
    let position, x, y;
    /* Prevent any other actions that may occur when moving over the image */
    e.preventDefault();
    /* Get the cursor's x and y positions: */
    position = getCursorPos(e);
    /* Calculate the position of the lens: */
    x = position.x - lens.offsetWidth / 2;
    y = position.y - lens.offsetHeight / 2;
    if (img) {
      /* Prevent the lens from being positioned outside the image: */
      if (x > img.width - lens.offsetWidth) {
        x = img.width - lens.offsetWidth;
      }
      if (x < 0) {
        x = 0;
      }
      if (y > img.height - lens.offsetHeight) {
        y = img.height - lens.offsetHeight;
      }
      if (y < 0) {
        y = 0;
      }
    } /* Set the position of the lens: */
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /* Display what the lens "sees": */
    if (result) {
      result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
    }
  }
  function getCursorPos(e: any) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /* Get the x and y positions of the image: */
    if (img) {
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
    }
    /* Consider any page scrolling: */
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
