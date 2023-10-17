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

document.addEventListener('DOMContentLoaded', function () {
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
});

document.addEventListener('DOMContentLoaded', function () {
    let tabs = document.querySelectorAll('.tabs', {
        swipeable: true,
    });
    M.Tabs.init(tabs);
});

document.addEventListener('DOMContentLoaded', function () {
    let calendar = document.querySelectorAll('.datepicker');
    M.Datepicker.init(calendar, {
        format: 'dd mmm, yyyy' 
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let timepicker = document.querySelectorAll('.timepicker');
    M.Timepicker.init(timepicker);
});

document.addEventListener('DOMContentLoaded', function () {
    let quantity = document.querySelectorAll('select');
    M.FormSelect.init(quantity);
});