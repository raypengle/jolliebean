(function () {
  if (document.querySelector('.site-footer')) return;

  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = [
    '<div class="footer-content">',
    '  <p class="footer-title">关注我们</p>',
    '  <div class="social-links" aria-label="社交媒体链接">',
    '    <a class="social-link social-link" href="https://space.bilibili.com/3493089245137090" aria-label="Bilibili" data-url=""><img src="./images/bilibili.webp" alt="Bilibili"></a>',
    '    <a class="social-link social-link" aria-label="=trello" href="https://trello.com/b/p9yVa1Bg"><img src="./images/trello.webp" alt="trello"></a>',
    '    <a class="social-link" href="" aria-label="Twitter" data-url=""><span>X</span></a>',
    '    <a class="social-link" href="" aria-label="Instagram" data-url=""><span>I</span></a>',
    '    <a class="social-link" href="" aria-label="Telegram" data-url=""><span>T</span></a>',
    '  </div>',
    '</div>'
  ].join('');

  function appendFooter() {
    if (!document.body) return;
    document.body.appendChild(footer);
  }

  footer.addEventListener('click', function (event) {
    var link = event.target.closest('.social-link');
    if (!link) return;
    var url = link.getAttribute('data-url') || link.getAttribute('href');
    if (!url) {
      event.preventDefault();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', appendFooter, { once: true });
  } else {
    appendFooter();
  }
})();
