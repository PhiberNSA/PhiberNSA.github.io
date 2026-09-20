(function () {
  "use strict";

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll("nav.links a");
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

  var linkBySectionId = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute("href").replace("#", "");
    linkBySectionId[id] = link;
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        var link = linkBySectionId[entry.target.id];
        if (!link || !entry.isIntersecting) return;
        navLinks.forEach(function (l) { l.classList.remove("active"); });
        link.classList.add("active");
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(function (section) { observer.observe(section); });
})();
