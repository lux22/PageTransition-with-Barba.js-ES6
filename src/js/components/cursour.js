import { TweenMax } from "gsap/all";
import { CURSOR } from "../../constants";

const matchMedia = window.matchMedia('(min-width:1199px)');

export const cursor = (() => {
  //    console.log('hellowe')
  const { cursorRound, cursorDot } = CURSOR;
  let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

  const animateCursor = () => {
    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        TweenMax.set(cursorDot, {
          css: {
            left: posX - 20,
            top: posY - 20,
          },
        });

        TweenMax.set(cursorRound, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    document.addEventListener("mousemove", (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "UL"||
        e.target.tagName === "INPUT"
      ) {
        cursorDot[0].classList.add("fadeOut");
        cursorRound[0].classList.add("fadeOut");
      } else {
        cursorDot[0].classList.remove("fadeOut");
        cursorRound[0].classList.remove("fadeOut");
        mouseX = e.pageX;
        mouseY = e.pageY;
      }
    });
  };

 matchMedia.matches ?  animateCursor() : null; 
  // $(".portfolio-item img").on("mouseenter", function() {
  //     cursor.addClass("active");
  //     follower.addClass("active");
  // });

  // $(".portfolio-item img").on("mouseleave", function() {
  //     cursor.removeClass("active");
  //     follower.removeClass("active");
  // });
})();
