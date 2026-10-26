// Общий скрипт сайта Simply: ссылки на релизы, появление блоков, подсветка плиток
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
    set('.dl-repo-watch', REPO);
  }
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); }
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .12 });
    els.forEach(function (e) { io.observe(e); });
  }
  document.querySelectorAll('.tile').forEach(function (t) {
    t.addEventListener('pointermove', function (ev) {
      var r = t.getBoundingClientRect();
      t.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
      t.style.setProperty('--my', (ev.clientY - r.top) + 'px');
    });
  });
})();