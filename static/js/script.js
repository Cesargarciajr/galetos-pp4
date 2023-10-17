document.addEventListener("DOMContentLoaded", function () {
  let sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);
});

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelectorAll(".slider");
  var instances = M.Slider.init(slider, {
    indicators: false,
    height: 600,
    duration: 300,
  });
});
