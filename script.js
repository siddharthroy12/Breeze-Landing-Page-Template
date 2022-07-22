window.addEventListener('load', function() {
  const elementsToAnimate = document.querySelectorAll(".feature-box");

  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

  const animateElement = (element) => {
    element.classList.add("fade-in");
  };

  const removeAnimationElement = (element) => {
    element.classList.remove("fade-in");
  };

  const handleScrollAnimation = () => {
    elementsToAnimate.forEach((el) => {
      if (elementInView(el, 100)) {
        animateElement(el);
      } else {
        removeAnimationElement(el);
      }
    })
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
})
