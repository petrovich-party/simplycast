// Общий скрипт сайта Simply: ссылки на релизы и мягкое появление блоков
(function () {
  var REPO = 'https://github.com/petrovich-party/simplycast';
  var REL = REPO + '/releases/download/v0.1.0/';
  if (location.protocol !== 'file:') {
    var set = function (s, u) { document.querySelectorAll(s).forEach(function (a) { a.href = u; }); };
    set('.dl-win', REL + 'SimplyCast-Setup-0.1.0.exe');
    set('.dl-single', REL + 'SimplyCast-Single-0.1.0.exe');
    set('.dl-apk', REL + 'SimplyCast-Remote.apk');
    set('.dl-all', REPO + '/releases');
    set('.dl-repo', REPO);
    set('.dl-issues', REPO + '/issues/new');
  }
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .08 });
  els.forEach(function (e) { io.observe(e); });
})();
