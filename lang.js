(function () {
  var root = document.documentElement;
  var en = document.getElementById('btn-en');
  var de = document.getElementById('btn-de');
  function set(lang) {
    root.classList.toggle('de', lang === 'de');
    root.lang = lang;
    en.setAttribute('aria-pressed', String(lang === 'en'));
    de.setAttribute('aria-pressed', String(lang === 'de'));
    try { localStorage.setItem('st-lang', lang); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem('st-lang'); } catch (e) {}
  set(saved || ((navigator.language || 'en').toLowerCase().indexOf('de') === 0 ? 'de' : 'en'));
  en.addEventListener('click', function () { set('en'); });
  de.addEventListener('click', function () { set('de'); });
})();
