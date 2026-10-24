(function () {
  "use strict";
  var root = document.documentElement;
  var burger = document.querySelector(".burger");
  var overlay = document.querySelector(".mob-overlay");
  var closeBtn = document.querySelector(".mob-close");
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    if (burger) { burger.setAttribute("aria-expanded", open ? "true" : "false"); }
  }
  if (burger) { burger.addEventListener("click", function () { setNav(!root.classList.contains("nav-open")); }); }
  if (overlay) { overlay.addEventListener("click", function () { setNav(false); }); }
  if (closeBtn) { closeBtn.addEventListener("click", function () { setNav(false); }); }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setNav(false); } });
  var mq = window.matchMedia("(min-width: 769px)");
  var onMq = function () { if (mq.matches) { setNav(false); } };
  if (mq.addEventListener) { mq.addEventListener("change", onMq); }
  var btns = document.querySelectorAll(".dd-btn");
  Array.prototype.forEach.call(btns, function (b) {
    b.addEventListener("click", function () {
      var li = b.parentNode;
      var open = li.classList.toggle("open-dd");
      b.setAttribute("aria-expanded", open ? "true" : "false");
      var m = li.querySelector(".dropmenu");
      if (m) { m.style.display = open ? "block" : ""; }
    });
  });
  var qs = document.querySelectorAll(".faq-q");
  Array.prototype.forEach.call(qs, function (q) {
    q.addEventListener("click", function () {
      var item = q.parentNode.parentNode;
      var panel = item.querySelector(".faq-a");
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    });
  });
  window.addEventListener("resize", function () {
    Array.prototype.forEach.call(document.querySelectorAll(".faq-item.open .faq-a"), function (p) { p.style.maxHeight = p.scrollHeight + "px"; });
  });
})();
