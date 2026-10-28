/* Site settings. Fill these in, then publish again:
 *   APP_STORE_URL  the app's Mac App Store link, once it is live
 *   SUPPORT_EMAIL  the address for support and privacy questions
 * Until they are set, buy buttons say "Coming soon" and contact lines keep their fallback text. */
const APP_STORE_URL = '';
const SUPPORT_EMAIL = 'extensions.support@icloud.com';

document.addEventListener('DOMContentLoaded', () => {
  for (const a of document.querySelectorAll('[data-buy]')) {
    if (APP_STORE_URL) {
      a.href = APP_STORE_URL;
      a.querySelector('[data-buy-label]').textContent = a.dataset.buy || 'Buy on the Mac App Store';
    } else {
      a.href = '#pricing';
      a.querySelector('[data-buy-label]').textContent = 'Coming soon to the Mac App Store';
    }
  }
  for (const el of document.querySelectorAll('[data-email]')) {
    if (SUPPORT_EMAIL) {
      const a = document.createElement('a');
      a.href = `mailto:${SUPPORT_EMAIL}`;
      a.textContent = SUPPORT_EMAIL;
      el.replaceChildren(a);
    }
  }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(Math.max(2026, new Date().getFullYear()));
});
