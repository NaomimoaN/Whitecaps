// Navigation
document.querySelectorAll("a[href]").forEach(function (a) {
  a.addEventListener("click", function (e) {
    var href = a.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
